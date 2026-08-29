package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.entity.*;
import com.aiva.AIVA_Project.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class adminTestService {

    private final assessmentTestRepository testRepository;
    private final testQuestionRepository questionRepository;
    private final testSlotRepository slotRepository;
    private final testInvitationRepository invitationRepository;
    private final testSubmissionRepository submissionRepository;
    private final submissionAnswerRepository answerRepository;
    private final userRepository userRepository;
    private final groqService groqService;

    public adminTestService(assessmentTestRepository testRepository,
                             testQuestionRepository questionRepository,
                             testSlotRepository slotRepository,
                             testInvitationRepository invitationRepository,
                             testSubmissionRepository submissionRepository,
                             submissionAnswerRepository answerRepository,
                             userRepository userRepository,
                             groqService groqService) {
        this.testRepository = testRepository;
        this.questionRepository = questionRepository;
        this.slotRepository = slotRepository;
        this.invitationRepository = invitationRepository;
        this.submissionRepository = submissionRepository;
        this.answerRepository = answerRepository;
        this.userRepository = userRepository;
        this.groqService = groqService;
    }

    public assessmentTest createTest(Long orgId, String adminEmail, createTestRequest req) {
        var admin = userRepository.findByEmail(adminEmail)
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        assessmentTest test = assessmentTest.builder()
                .organizationId(orgId)
                .title(req.getTitle())
                .description(req.getDescription())
                .roleCategory(req.getRoleCategory())
                .durationMinutes(req.getDurationMinutes())
                .questionCount(req.getQuestionCount())
                .requireCamera(Boolean.TRUE.equals(req.getRequireCamera()))
                .requireMicrophone(Boolean.TRUE.equals(req.getRequireMicrophone()))
                .requireFullscreen(Boolean.TRUE.equals(req.getRequireFullscreen()))
                .maxTabSwitchWarnings(req.getMaxTabSwitchWarnings() == null ? 2 : req.getMaxTabSwitchWarnings())
                .createdByUserId(admin.getId())
                .createdAt(LocalDateTime.now())
                .active(true)
                .build();

        return testRepository.save(test);
    }

    public assessmentTest getTest(Long testId) {
        return testRepository.findById(testId).orElseThrow(() -> new RuntimeException("Test not found"));
    }

    public assessmentTest updateTest(Long testId, createTestRequest req) {
        var test = getTest(testId);
        test.setTitle(req.getTitle());
        test.setDescription(req.getDescription());
        test.setRoleCategory(req.getRoleCategory());
        test.setDurationMinutes(req.getDurationMinutes());
        test.setQuestionCount(req.getQuestionCount());
        test.setRequireCamera(Boolean.TRUE.equals(req.getRequireCamera()));
        test.setRequireMicrophone(Boolean.TRUE.equals(req.getRequireMicrophone()));
        test.setRequireFullscreen(Boolean.TRUE.equals(req.getRequireFullscreen()));
        test.setMaxTabSwitchWarnings(req.getMaxTabSwitchWarnings());
        return testRepository.save(test);
    }

    public List<assessmentTest> listTests(Long orgId) {
        return testRepository.findByOrganizationId(orgId);
    }

    @Transactional
    public void deleteTest(Long testId) {
        List<testSubmission> submissions = submissionRepository.findByTestId(testId);
        for (testSubmission sub : submissions) {
            answerRepository.deleteBySubmissionId(sub.getId());
        }
        submissionRepository.deleteAll(submissions);
        invitationRepository.deleteByTestId(testId);
        slotRepository.deleteByTestId(testId);
        questionRepository.deleteByTestId(testId);
        testRepository.deleteById(testId);
    }

    public List<testQuestion> addQuestions(Long testId, List<questionInput> inputs) {
        List<testQuestion> existing = questionRepository.findByTestIdOrderByOrderIndexAsc(testId);
        int startIndex = existing.size();

        List<testQuestion> saved = IntStream.range(0, inputs.size())
                .mapToObj(i -> {
                    var in = inputs.get(i);
                    return testQuestion.builder()
                            .testId(testId)
                            .questionText(in.getQuestionText())
                            .optionA(in.getOptionA())
                            .optionB(in.getOptionB())
                            .optionC(in.getOptionC())
                            .optionD(in.getOptionD())
                            .correctOption(in.getCorrectOption())
                            .maxMarks(in.getMaxMarks() == null ? 10.0 : in.getMaxMarks())
                            .orderIndex(startIndex + i)
                            .build();
                })
                .collect(Collectors.toList());

        return questionRepository.saveAll(saved);
    }

    public List<testQuestion> listQuestions(Long testId) {
        return questionRepository.findByTestIdOrderByOrderIndexAsc(testId);
    }

    public testQuestion updateQuestion(Long questionId, questionInput input) {
        var q = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("Question not found"));
        q.setQuestionText(input.getQuestionText());
        q.setOptionA(input.getOptionA());
        q.setOptionB(input.getOptionB());
        q.setOptionC(input.getOptionC());
        q.setOptionD(input.getOptionD());
        q.setCorrectOption(input.getCorrectOption());
        if (input.getMaxMarks() != null) q.setMaxMarks(input.getMaxMarks());
        return questionRepository.save(q);
    }

    public void deleteQuestion(Long questionId) {
        questionRepository.deleteById(questionId);
    }

    public List<questionInput> draftQuestionsWithAi(aiDraftRequest req) {
        String systemPrompt = "You are an expert technical assessor creating a multiple-choice hiring assessment. " +
                "Generate exactly " + req.getCount() + " MCQ questions for the role: " + req.getRoleCategory() + ". " +
                "Focus on these topics: " + req.getTopics() + ". " +
                "Return ONLY the questions in this EXACT format, one block per question, blocks separated by a blank line, " +
                "no numbering, no extra commentary:\n" +
                "Q: <question text>\n" +
                "A: <option A>\n" +
                "B: <option B>\n" +
                "C: <option C>\n" +
                "D: <option D>\n" +
                "CORRECT: <A or B or C or D>";

        String result = groqService.chat(systemPrompt, "Generate the MCQ questions now.");

        List<questionInput> parsed = new ArrayList<>();
        String[] blocks = result.split("\\n\\s*\\n");
        for (String block : blocks) {
            questionInput q = new questionInput();
            q.setMaxMarks(10.0);
            for (String line : block.split("\n")) {
                line = line.trim();
                if (line.startsWith("Q:")) q.setQuestionText(line.substring(2).trim());
                else if (line.startsWith("A:")) q.setOptionA(line.substring(2).trim());
                else if (line.startsWith("B:")) q.setOptionB(line.substring(2).trim());
                else if (line.startsWith("C:")) q.setOptionC(line.substring(2).trim());
                else if (line.startsWith("D:")) q.setOptionD(line.substring(2).trim());
                else if (line.startsWith("CORRECT:")) q.setCorrectOption(line.substring(8).trim());
            }
            if (q.getQuestionText() != null && q.getCorrectOption() != null) {
                parsed.add(q);
            }
        }
        return parsed;
    }

    public testSlot createSlot(Long testId, slotRequest req) {
        testSlot slot = testSlot.builder()
                .testId(testId)
                .startTime(req.getStartTime())
                .endTime(req.getEndTime())
                .build();
        return slotRepository.save(slot);
    }

    public testSlot updateSlot(Long slotId, slotRequest req) {
        var slot = slotRepository.findById(slotId).orElseThrow(() -> new RuntimeException("Slot not found"));
        slot.setStartTime(req.getStartTime());
        slot.setEndTime(req.getEndTime());
        return slotRepository.save(slot);
    }

        @Transactional
    public void deleteSlot(Long slotId) {
        invitationRepository.deleteBySlotId(slotId);
        if (slotRepository.existsById(slotId)) {
            slotRepository.deleteById(slotId);
        }
    }

    public List<testSlot> listSlots(Long testId) {
        return slotRepository.findByTestId(testId);
    }

    public List<testInvitation> inviteCandidates(Long testId, Long slotId, List<String> emails) {
        List<testInvitation> results = new ArrayList<>();
        for (String rawEmail : emails) {
            String email = rawEmail == null ? "" : rawEmail.trim().toLowerCase();
            if (email.isEmpty()) continue;

            List<testInvitation> existing = invitationRepository
                    .findByTestIdAndCandidateEmailOrderByInvitedAtDesc(testId, email);
            var openInvite = existing.stream()
                    .filter(i -> !"COMPLETED".equals(i.getStatus()))
                    .findFirst();

            if (openInvite.isPresent()) {
                var inv = openInvite.get();
                inv.setSlotId(slotId);
                inv.setStatus("INVITED");
                inv.setInvitedAt(LocalDateTime.now());
                results.add(invitationRepository.save(inv));
            } else {
                results.add(invitationRepository.save(testInvitation.builder()
                        .testId(testId)
                        .slotId(slotId)
                        .candidateEmail(email)
                        .status("INVITED")
                        .invitedAt(LocalDateTime.now())
                        .build()));
            }
        }
        return results;
    }

    public List<testInvitation> listInvitations(Long testId) {
        return invitationRepository.findByTestId(testId);
    }
}
