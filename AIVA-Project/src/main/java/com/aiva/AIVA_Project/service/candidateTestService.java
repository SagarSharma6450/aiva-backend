package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.entity.*;
import com.aiva.AIVA_Project.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
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
    private final assessmentGradingService gradingService;

    public candidateTestService(testInvitationRepository invitationRepository,
                                 assessmentTestRepository testRepository,
                                 testSlotRepository slotRepository,
                                 testQuestionRepository questionRepository,
                                 testSubmissionRepository submissionRepository,
                                 submissionAnswerRepository answerRepository,
                                 userRepository userRepository,
                                 assessmentGradingService gradingService) {
        this.invitationRepository = invitationRepository;
        this.testRepository = testRepository;
        this.slotRepository = slotRepository;
        this.questionRepository = questionRepository;
        this.submissionRepository = submissionRepository;
        this.answerRepository = answerRepository;
        this.userRepository = userRepository;
        this.gradingService = gradingService;
    }

    public List<candidateTestSummary> getAssignedTests(String email) {
        List<testInvitation> invitations = invitationRepository.findByCandidateEmail(email.toLowerCase());
        return invitations.stream().map(inv -> {
            var test = testRepository.findById(inv.getTestId()).orElseThrow();
            var slot = slotRepository.findById(inv.getSlotId()).orElseThrow();
            return candidateTestSummary.builder()
                    .testId(test.getId())
                    .title(test.getTitle())
                    .roleCategory(test.getRoleCategory())
                    .durationMinutes(test.getDurationMinutes())
                    .questionCount(test.getQuestionCount())
                    .status(inv.getStatus())
                    .slotId(slot.getId())
                    .slotStart(slot.getStartTime())
                    .slotEnd(slot.getEndTime())
                    .build();
        }).collect(Collectors.toList());
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
        var invitation = invitationRepository.findByTestIdAndCandidateEmail(testId, email.toLowerCase())
                .orElseThrow(() -> new RuntimeException("You are not invited to this test"));
        var test = testRepository.findById(testId).orElseThrow(() -> new RuntimeException("Test not found"));
        var slot = slotRepository.findById(invitation.getSlotId()).orElseThrow();

        LocalDateTime now = LocalDateTime.now();
        if (now.isBefore(slot.getStartTime()) || now.isAfter(slot.getEndTime())) {
            throw new RuntimeException("This test is not currently available. Slot: "
                    + slot.getStartTime() + " to " + slot.getEndTime());
        }

        var existing = submissionRepository.findByTestIdAndCandidateId(testId, user.getId());
        if (existing.isPresent() && "COMPLETED".equals(existing.get().getStatus())) {
            throw new RuntimeException("You have already completed this test");
        }

        testSubmission submission = existing.orElseGet(() -> testSubmission.builder()
                .testId(testId)
                .candidateId(user.getId())
                .slotId(slot.getId())
                .startedAt(now)
                .tabSwitchCount(0)
                .fullscreenExitCount(0)
                .status("IN_PROGRESS")
                .build());

        submission = submissionRepository.save(submission);

        invitation.setStatus("STARTED");
        invitationRepository.save(invitation);

        List<testQuestion> questions = questionRepository.findByTestIdOrderByOrderIndexAsc(testId);
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
                .currentIndex(index + 1)
                .totalQuestions(questions.size())
                .savedAnswer(saved.map(submissionAnswer::getCandidateAnswer).orElse(null))
                .build();
    }

    public ackResponse submitAnswer(Long submissionId, Long questionId, String answerText) {
        var question = questionRepository.findById(questionId).orElseThrow();
        var existing = answerRepository.findBySubmissionIdAndQuestionId(submissionId, questionId);

        var grade = gradingService.gradeAnswer(question.getQuestionText(), answerText, question.getMaxMarks());

        submissionAnswer answer = existing.orElseGet(() -> submissionAnswer.builder()
                .submissionId(submissionId)
                .questionId(questionId)
                .maxMarks(question.getMaxMarks())
                .build());
        answer.setCandidateAnswer(answerText);
        answer.setAiScore(grade.score);
        answer.setAiFeedback(grade.feedback);
        answerRepository.save(answer);

        var submission = submissionRepository.findById(submissionId).orElseThrow();
        List<testQuestion> questions = questionRepository.findByTestIdOrderByOrderIndexAsc(submission.getTestId());
        int currentOrder = question.getOrderIndex();
        boolean hasNext = currentOrder + 1 < questions.size();

        return ackResponse.builder()
                .saved(true)
                .hasNext(hasNext)
                .nextIndex(hasNext ? currentOrder + 2 : null) // 1-based next index
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

        var invitation = invitationRepository.findByTestIdAndCandidateEmail(
                submission.getTestId(),
                userRepository.findById(submission.getCandidateId()).orElseThrow().getEmail()
        );
        invitation.ifPresent(inv -> {
            inv.setStatus("COMPLETED");
            invitationRepository.save(inv);
        });
    }
}
