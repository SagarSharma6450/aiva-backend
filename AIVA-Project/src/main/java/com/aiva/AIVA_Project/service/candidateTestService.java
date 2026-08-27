package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.entity.*;
import com.aiva.AIVA_Project.repository.*;
import org.springframework.stereotype.Service;

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

    public List<candidateTestSummary> getAssignedTests(String email) {
        List<testInvitation> invitations = invitationRepository.findByCandidateEmail(email.toLowerCase());
        LocalDateTime now = LocalDateTime.now();

        return invitations.stream().map(inv -> {
            var test = testRepository.findById(inv.getTestId()).orElse(null);
            var slot = slotRepository.findById(inv.getSlotId()).orElse(null);
            if (test == null || slot == null) return null; // slot/test was deleted by admin

            String effectiveStatus = inv.getStatus();
            if (!"COMPLETED".equals(effectiveStatus) && now.isAfter(slot.getEndTime())) {
                effectiveStatus = "EXPIRED";
            }

            return candidateTestSummary.builder()
                    .testId(test.getId())
                    .title(test.getTitle())
                    .roleCategory(test.getRoleCategory())
                    .durationMinutes(test.getDurationMinutes())
                    .questionCount(test.getQuestionCount())
                    .status(effectiveStatus)
                    .slotId(slot.getId())
                    .slotStart(slot.getStartTime())
                    .slotEnd(slot.getEndTime())
                    .build();
        }).filter(Objects::nonNull).collect(Collectors.toList());
    }

    public testInstructionsResponse getInstructions(Long testId) {
        var test = testRepository.findById(testId).orElseThrow(() -> new RuntimeException("Test not found"));
        return testInstructionsResponse.builder()
                .title(test.getTitle())
                .description(test.getDescription())
                .durationMinutes(test.getDurationMinutes())
                .questionCount(test.getQuestionCount())
                .requireCamera(test.getRequireCamera())
                .requireMicrophone(test.getRequireMicrophone())
                .requireFullscreen(test.getRequireFullscreen())
                .maxTabSwitchWarnings(test.getMaxTabSwitchWarnings())
                .build();
    }

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
            if (!now.isAfter(slot.getEndTime())) {
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

        List<testSubmission> existingSubs = submissionRepository
                .findByTestIdAndCandidateIdOrderByStartedAtDesc(testId, user.getId());
       testSubmission submission = existingSubs.stream()
        .filter(s -> "IN_PROGRESS".equals(s.getStatus()))
        .findFirst()
        .orElse(null);

if (submission == null) {
    submission = testSubmission.builder()
            .testId(testId)
            .candidateId(user.getId())
            .slotId(chosenSlot.getId())
            .startedAt(now)
            .tabSwitchCount(0)
            .fullscreenExitCount(0)
            .status("IN_PROGRESS")
            .build();
}

        submission = submissionRepository.save(submission);

        chosen.setStatus("STARTED");
        invitationRepository.save(chosen);

        List<testQuestion> questions = questionRepository.findByTestIdOrderByOrderIndexAsc(testId);
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

    public candidateQuestionView getQuestion(Long submissionId, int index) {
        var submission = submissionRepository.findById(submissionId).orElseThrow();
        List<testQuestion> questions = questionRepository.findByTestIdOrderByOrderIndexAsc(submission.getTestId());
        if (index < 0 || index >= questions.size()) throw new RuntimeException("Invalid question index");
        var q = questions.get(index);
        var saved = answerRepository.findBySubmissionIdAndQuestionId(submissionId, q.getId());

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
        List<testQuestion> questions = questionRepository.findByTestIdOrderByOrderIndexAsc(submission.getTestId());
        int currentOrder = question.getOrderIndex();
        boolean hasNext = currentOrder + 1 < questions.size();

        return ackResponse.builder()
                .saved(true)
                .hasNext(hasNext)
                .nextIndex(hasNext ? currentOrder + 2 : null)
                .build();
    }

    public void logProctorEvent(Long submissionId, String type) {
        var submission = submissionRepository.findById(submissionId).orElseThrow();
        if ("TAB_SWITCH".equals(type)) {
            submission.setTabSwitchCount(submission.getTabSwitchCount() + 1);
        } else if ("FULLSCREEN_EXIT".equals(type)) {
            submission.setFullscreenExitCount(submission.getFullscreenExitCount() + 1);
        }
        submissionRepository.save(submission);

        var test = testRepository.findById(submission.getTestId()).orElseThrow();
        int totalViolations = submission.getTabSwitchCount() + submission.getFullscreenExitCount();
        if (totalViolations >= test.getMaxTabSwitchWarnings() && "IN_PROGRESS".equals(submission.getStatus())) {
            complete(submissionId, "AUTO_SUBMITTED");
        }
    }

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
