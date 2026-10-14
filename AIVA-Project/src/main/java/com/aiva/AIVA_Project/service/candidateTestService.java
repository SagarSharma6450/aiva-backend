package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.entity.*;
import com.aiva.AIVA_Project.repository.*;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class candidateTestService {

    private final testInvitationRepository invitationRepository;
    private final assessmentTestRepository testRepository;
    private final testSlotRepository slotRepository;
    private final testQuestionRepository questionRepository;
    private final testSubmissionRepository submissionRepository;
    private final submissionAnswerRepository answerRepository;
    private final userRepository userRepository;

    public candidateTestService(testInvitationRepository invitationRepository,
                                 assessmentTestRepository testRepository,
                                 testSlotRepository slotRepository,
                                 testQuestionRepository questionRepository,
                                 testSubmissionRepository submissionRepository,
                                 submissionAnswerRepository answerRepository,
                                 userRepository userRepository) {
        this.invitationRepository = invitationRepository;
        this.testRepository = testRepository;
        this.slotRepository = slotRepository;
        this.questionRepository = questionRepository;
        this.submissionRepository = submissionRepository;
        this.answerRepository = answerRepository;
        this.userRepository = userRepository;
    }

    // ---------- helpers ----------

    private int nz(Integer v) { return v == null ? 0 : v; }

    private int lim(Integer v) { return v == null ? 2 : v; }

    // only the first N questions, where N = the question count the admin set
    private List<testQuestion> questionsFor(Long testId) {
        var test = testRepository.findById(testId).orElseThrow();
        List<testQuestion> all = questionRepository.findByTestIdOrderByOrderIndexAsc(testId);
        int limit = test.getQuestionCount() == null
                ? all.size()
                : Math.min(test.getQuestionCount(), all.size());
        return all.subList(0, limit);
    }

    // ---------- candidate dashboard ----------

    public List<candidateTestSummary> getAssignedTests(String email) {
        List<testInvitation> invitations = invitationRepository.findByCandidateEmail(email.toLowerCase());
        LocalDateTime now = LocalDateTime.now();

        return invitations.stream().map(inv -> {
            var test = testRepository.findById(inv.getTestId()).orElse(null);
            var slot = slotRepository.findById(inv.getSlotId()).orElse(null);
            if (test == null || slot == null) return null; // test/slot deleted by admin

            String effectiveStatus = inv.getStatus();
            if (!"COMPLETED".equals(effectiveStatus) && now.isAfter(slot.getEndTime())) {
                effectiveStatus = "EXPIRED";
            }

            return candidateTestSummary.builder()
                    .testId(test.getId())
                    .title(test.getTitle())
                    .roleCategory(test.getRoleCategory())
                    .durationMinutes(test.getDurationMinutes())
                    .questionCount(questionsFor(test.getId()).size())
                    .status(effectiveStatus)
                    .slotId(slot.getId())
                    .slotStart(slot.getStartTime())
                    .slotEnd(slot.getEndTime())
                    .build();
        }).filter(Objects::nonNull).collect(Collectors.toList());
    }

    // ---------- instructions ----------

    public testInstructionsResponse getInstructions(Long testId) {
        var test = testRepository.findById(testId).orElseThrow(() -> new RuntimeException("Test not found"));
        return testInstructionsResponse.builder()
                .title(test.getTitle())
                .description(test.getDescription())
                .durationMinutes(test.getDurationMinutes())
                .questionCount(questionsFor(testId).size())
                .requireCamera(test.getRequireCamera())
                .requireMicrophone(test.getRequireMicrophone())
                .requireFullscreen(test.getRequireFullscreen())
                .maxTabSwitchWarnings(lim(test.getMaxTabSwitchWarnings()))
                .maxFullscreenExits(lim(test.getMaxFullscreenExits()))
                .maxMultipleFaces(lim(test.getMaxMultipleFaces()))
                .maxNoFace(lim(test.getMaxNoFace()))
                .maxNoise(lim(test.getMaxNoise()))
                .maxDevTools(lim(test.getMaxDevTools()))
                .build();
    }

    // ---------- start ----------

    public startSubmissionResponse startTest(Long testId, String email) {
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        List<testInvitation> invitations = invitationRepository
                .findByTestIdAndCandidateEmailOrderByInvitedAtDesc(testId, email.toLowerCase());
        if (invitations.isEmpty()) {
            throw new RuntimeException("You are not invited to this test");
        }

        LocalDateTime now = LocalDateTime.now();

        testInvitation chosen = null;
        testSlot chosenSlot = null;
        for (testInvitation inv : invitations) {
            if ("COMPLETED".equals(inv.getStatus())) continue;
            var slotOpt = slotRepository.findById(inv.getSlotId());
            if (slotOpt.isEmpty()) continue; // slot was deleted
            var slot = slotOpt.get();
            if (!now.isBefore(slot.getStartTime()) && !now.isAfter(slot.getEndTime())) {
                chosen = inv;
                chosenSlot = slot;
                break;
            }
        }

        if (chosen == null) {
            boolean alreadyCompleted = invitations.stream().anyMatch(i -> "COMPLETED".equals(i.getStatus()));
            if (alreadyCompleted) {
                throw new RuntimeException("You have already completed this test");
            }
            throw new RuntimeException("This test is not currently available. Please check your assigned time slot.");
        }

        // lambdas need effectively-final variables
        final Long slotIdForSubmission = chosenSlot.getId();

        List<testSubmission> existingSubs = submissionRepository
                .findByTestIdAndCandidateIdOrderByStartedAtDesc(testId, user.getId());
        testSubmission submission = existingSubs.stream()
                .filter(s -> "IN_PROGRESS".equals(s.getStatus()))
                .findFirst()
                .orElseGet(() -> testSubmission.builder()
                        .testId(testId)
                        .candidateId(user.getId())
                        .slotId(slotIdForSubmission)
                        .startedAt(now)
                        .tabSwitchCount(0)
                        .fullscreenExitCount(0)
                        .multipleFacesCount(0)
                        .noFaceCount(0)
                        .noiseDetectedCount(0)
                        .devToolsCount(0)
                        .status("IN_PROGRESS")
                        .build());

        submission = submissionRepository.save(submission);

        chosen.setStatus("STARTED");
        invitationRepository.save(chosen);

        List<testQuestion> questions = questionsFor(testId);
        if (questions.isEmpty()) {
            throw new RuntimeException("This test has no questions configured yet. Contact the hiring team.");
        }
        var first = questions.get(0);

        return startSubmissionResponse.builder()
                .submissionId(submission.getId())
                .firstQuestionId(first.getId())
                .firstQuestionText(first.getQuestionText())
                .totalQuestions(questions.size())
                .build();
    }

    // ---------- questions ----------

    public candidateQuestionView getQuestion(Long submissionId, int index) {
        var submission = submissionRepository.findById(submissionId).orElseThrow();
        var test = testRepository.findById(submission.getTestId()).orElseThrow();
        List<testQuestion> questions = questionsFor(submission.getTestId());
        if (index < 0 || index >= questions.size()) throw new RuntimeException("Invalid question index");
        var q = questions.get(index);
        var saved = answerRepository.findBySubmissionIdAndQuestionId(submissionId, q.getId());

        Integer remaining = null;
        if (test.getDurationMinutes() != null && test.getDurationMinutes() > 0 && submission.getStartedAt() != null) {
            long left = Duration.between(LocalDateTime.now(),
                    submission.getStartedAt().plusMinutes(test.getDurationMinutes())).getSeconds();
            remaining = (int) Math.max(0, left);
        }

        return candidateQuestionView.builder()
                .questionId(q.getId())
                .questionText(q.getQuestionText())
                .optionA(q.getOptionA())
                .optionB(q.getOptionB())
                .optionC(q.getOptionC())
                .optionD(q.getOptionD())
                .currentIndex(index + 1)
                .totalQuestions(questions.size())
                .savedSelectedOption(saved.map(submissionAnswer::getSelectedOption).orElse(null))
                .remainingSeconds(remaining)
                .build();
    }

    public ackResponse submitAnswer(Long submissionId, Long questionId, String selectedOption) {
        var question = questionRepository.findById(questionId).orElseThrow();
        var existing = answerRepository.findBySubmissionIdAndQuestionId(submissionId, questionId);

        boolean correct = question.getCorrectOption() != null && selectedOption != null
                && question.getCorrectOption().trim().equalsIgnoreCase(selectedOption.trim());
        double score = correct ? (question.getMaxMarks() == null ? 0 : question.getMaxMarks()) : 0;

        submissionAnswer answer = existing.orElseGet(() -> submissionAnswer.builder()
                .submissionId(submissionId)
                .questionId(questionId)
                .maxMarks(question.getMaxMarks())
                .build());
        answer.setSelectedOption(selectedOption);
        answer.setIsCorrect(correct);
        answer.setAiScore(score);
        answer.setAiFeedback(correct ? "Correct" : ("Incorrect. Correct answer: " + question.getCorrectOption()));
        answerRepository.save(answer);

        var submission = submissionRepository.findById(submissionId).orElseThrow();
        List<testQuestion> questions = questionsFor(submission.getTestId());
        int idx = -1;
        for (int i = 0; i < questions.size(); i++) {
            if (questions.get(i).getId().equals(questionId)) { idx = i; break; }
        }
        boolean hasNext = idx >= 0 && idx + 1 < questions.size();

        return ackResponse.builder()
                .saved(true)
                .hasNext(hasNext)
                .nextIndex(hasNext ? idx + 2 : null) // 1-based
                .build();
    }

    // ---------- proctoring ----------

    public proctorResult logProctorEvent(Long submissionId, String type) {
        var submission = submissionRepository.findById(submissionId).orElseThrow();
        var test = testRepository.findById(submission.getTestId()).orElseThrow();

        if (!"IN_PROGRESS".equals(submission.getStatus())) {
            return proctorResult.builder().autoSubmitted(true).type(type).count(0).allowed(0).build();
        }

        int count;
        int allowed;
        switch (type) {
            case "TAB_SWITCH":
                submission.setTabSwitchCount(nz(submission.getTabSwitchCount()) + 1);
                count = submission.getTabSwitchCount();
                allowed = lim(test.getMaxTabSwitchWarnings());
                break;
            case "FULLSCREEN_EXIT":
                submission.setFullscreenExitCount(nz(submission.getFullscreenExitCount()) + 1);
                count = submission.getFullscreenExitCount();
                allowed = lim(test.getMaxFullscreenExits());
                break;
            case "MULTIPLE_FACES":
                submission.setMultipleFacesCount(nz(submission.getMultipleFacesCount()) + 1);
                count = submission.getMultipleFacesCount();
                allowed = lim(test.getMaxMultipleFaces());
                break;
            case "NO_FACE":
                submission.setNoFaceCount(nz(submission.getNoFaceCount()) + 1);
                count = submission.getNoFaceCount();
                allowed = lim(test.getMaxNoFace());
                break;
            case "NOISE_DETECTED":
                submission.setNoiseDetectedCount(nz(submission.getNoiseDetectedCount()) + 1);
                count = submission.getNoiseDetectedCount();
                allowed = lim(test.getMaxNoise());
                break;
            case "DEVTOOLS_OPENED":
                submission.setDevToolsCount(nz(submission.getDevToolsCount()) + 1);
                count = submission.getDevToolsCount();
                allowed = lim(test.getMaxDevTools());
                break;
            default:
                return proctorResult.builder().autoSubmitted(false).type(type).count(0).allowed(0).build();
        }
        submissionRepository.save(submission);

        boolean exceeded = count > allowed; // more than allowed -> auto-submit
        if (exceeded) complete(submissionId, "AUTO_SUBMITTED");

        return proctorResult.builder().autoSubmitted(exceeded).type(type).count(count).allowed(allowed).build();
    }

    // ---------- completion ----------

    public candidateCompletionResponse complete(Long submissionId) {
        complete(submissionId, "COMPLETED");
        return candidateCompletionResponse.builder()
                .message("Your responses have been submitted for review. The hiring team will contact you.")
                .build();
    }

    private void complete(Long submissionId, String status) {
        var submission = submissionRepository.findById(submissionId).orElseThrow();
        if ("COMPLETED".equals(submission.getStatus()) || "AUTO_SUBMITTED".equals(submission.getStatus())) return;

        List<submissionAnswer> answers = answerRepository.findBySubmissionId(submissionId);
        double total = answers.stream().mapToDouble(a -> a.getAiScore() == null ? 0 : a.getAiScore()).sum();
        double max = answers.stream().mapToDouble(a -> a.getMaxMarks() == null ? 0 : a.getMaxMarks()).sum();

        submission.setStatus(status);
        submission.setCompletedAt(LocalDateTime.now());
        submission.setTotalScore(total);
        submission.setMaxPossibleScore(max);
        submissionRepository.save(submission);

        var candidate = userRepository.findById(submission.getCandidateId()).orElseThrow();
        List<testInvitation> invitations = invitationRepository
                .findByTestIdAndCandidateEmailOrderByInvitedAtDesc(submission.getTestId(), candidate.getEmail());
        invitations.stream()
                .filter(i -> i.getSlotId().equals(submission.getSlotId()))
                .findFirst()
                .ifPresent(inv -> {
                    inv.setStatus("COMPLETED");
                    invitationRepository.save(inv);
                });
    }
}
