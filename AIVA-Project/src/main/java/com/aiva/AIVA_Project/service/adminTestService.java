package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.entity.*;
import com.aiva.AIVA_Project.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class adminTestService {

    private final assessmentTestRepository testRepository;
    private final testQuestionRepository questionRepository;
    private final testSlotRepository slotRepository;
    private final testInvitationRepository invitationRepository;
    private final userRepository userRepository;
    private final groqService groqService;

    public adminTestService(assessmentTestRepository testRepository,
                             testQuestionRepository questionRepository,
                             testSlotRepository slotRepository,
                             testInvitationRepository invitationRepository,
                             userRepository userRepository,
                             groqService groqService) {
        this.testRepository = testRepository;
        this.questionRepository = questionRepository;
        this.slotRepository = slotRepository;
        this.invitationRepository = invitationRepository;
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

    public List<assessmentTest> listTests(Long orgId) {
        return testRepository.findByOrganizationId(orgId);
    }

    public List<testQuestion> addQuestions(Long testId, List<questionInput> inputs) {
        List<testQuestion> existing = questionRepository.findByTestIdOrderByOrderIndexAsc(testId);
        int startIndex = existing.size();

        List<testQuestion> saved = IntStream.range(0, inputs.size())
                .mapToObj(i -> testQuestion.builder()
                        .testId(testId)
                        .questionText(inputs.get(i).getQuestionText())
                        .maxMarks(inputs.get(i).getMaxMarks() == null ? 10.0 : inputs.get(i).getMaxMarks())
                        .orderIndex(startIndex + i)
                        .build())
                .collect(Collectors.toList());

        return questionRepository.saveAll(saved);
    }

    public List<questionInput> draftQuestionsWithAi(aiDraftRequest req) {
        String systemPrompt = "You are an expert technical interviewer creating a hiring assessment. " +
                "Generate exactly " + req.getCount() + " concise, clear assessment questions for the role: " +
                req.getRoleCategory() + ". Focus on these topics: " + req.getTopics() + ". " +
                "Return ONLY the questions, one per line, no numbering, no extra text.";

        String result = groqService.chat(systemPrompt, "Generate the questions now.");

        return java.util.Arrays.stream(result.split("\n"))
                .map(String::trim)
                .filter(line -> !line.isBlank())
                .map(line -> {
                    questionInput q = new questionInput();
                    q.setQuestionText(line);
                    q.setMaxMarks(10.0);
                    return q;
                })
                .collect(Collectors.toList());
    }

    public testSlot createSlot(Long testId, slotRequest req) {
        testSlot slot = testSlot.builder()
                .testId(testId)
                .startTime(req.getStartTime())
                .endTime(req.getEndTime())
                .build();
        return slotRepository.save(slot);
    }

    public List<testSlot> listSlots(Long testId) {
        return slotRepository.findByTestId(testId);
    }

    public List<testInvitation> inviteCandidates(Long testId, Long slotId, List<String> emails) {
        List<testInvitation> invitations = emails.stream()
                .map(email -> testInvitation.builder()
                        .testId(testId)
                        .slotId(slotId)
                        .candidateEmail(email.trim().toLowerCase())
                        .status("INVITED")
                        .invitedAt(LocalDateTime.now())
                        .build())
                .collect(Collectors.toList());

        return invitationRepository.saveAll(invitations);
    }

    public List<testInvitation> listInvitations(Long testId) {
        return invitationRepository.findByTestId(testId);
    }
}
