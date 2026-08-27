package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.submissionDetail;
import com.aiva.AIVA_Project.dto.submissionSummary;
import com.aiva.AIVA_Project.entity.submissionAnswer;
import com.aiva.AIVA_Project.entity.testQuestion;
import com.aiva.AIVA_Project.entity.testSubmission;
import com.aiva.AIVA_Project.entity.user;
import com.aiva.AIVA_Project.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class adminReportService {

    private final testSubmissionRepository submissionRepository;
    private final submissionAnswerRepository answerRepository;
    private final testQuestionRepository questionRepository;
    private final userRepository userRepository;

    public adminReportService(testSubmissionRepository submissionRepository,
                               submissionAnswerRepository answerRepository,
                               testQuestionRepository questionRepository,
                               userRepository userRepository) {
        this.submissionRepository = submissionRepository;
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
        this.userRepository = userRepository;
    }

    public List<submissionSummary> listSubmissions(Long testId) {
        return submissionRepository.findByTestId(testId).stream().map(sub -> {
            user candidate = userRepository.findById(sub.getCandidateId()).orElseThrow();
            return toSummary(sub, candidate);
        }).collect(Collectors.toList());
    }

    public submissionDetail getSubmissionDetail(Long submissionId) {
        testSubmission sub = submissionRepository.findById(submissionId).orElseThrow();
        user candidate = userRepository.findById(sub.getCandidateId()).orElseThrow();

        List<testQuestion> questions = questionRepository.findByTestIdOrderByOrderIndexAsc(sub.getTestId());
        var answers = answerRepository.findBySubmissionId(submissionId);

        List<submissionDetail.answerDetail> details = questions.stream().map(q -> {
            var ans = answers.stream().filter(a -> a.getQuestionId().equals(q.getId())).findFirst();
            return submissionDetail.answerDetail.builder()
                    .questionText(q.getQuestionText())
                    .optionA(q.getOptionA())
                    .optionB(q.getOptionB())
                    .optionC(q.getOptionC())
                    .optionD(q.getOptionD())
                    .selectedOption(ans.map(submissionAnswer::getSelectedOption).orElse(null))
                    .correctOption(q.getCorrectOption())
                    .isCorrect(ans.map(a -> Boolean.TRUE.equals(a.getIsCorrect())).orElse(false))
                    .maxMarks(q.getMaxMarks())
                    .aiScore(ans.map(a -> a.getAiScore() == null ? 0.0 : a.getAiScore()).orElse(0.0))
                    .build();
        }).collect(Collectors.toList());

        return submissionDetail.builder()
                .candidate(toSummary(sub, candidate))
                .answers(details)
                .build();
    }

    private submissionSummary toSummary(testSubmission sub, user candidate) {
        return submissionSummary.builder()
                .submissionId(sub.getId())
                .candidateName(candidate.getName())
                .candidateEmail(candidate.getEmail())
                .highestQualification(candidate.getHighestQualification())
                .institution(candidate.getInstitution())
                .graduationYear(candidate.getGraduationYear())
                .status(sub.getStatus())
                .totalScore(sub.getTotalScore())
                .maxPossibleScore(sub.getMaxPossibleScore())
                .tabSwitchCount(sub.getTabSwitchCount())
                .fullscreenExitCount(sub.getFullscreenExitCount())
                .completedAt(sub.getCompletedAt())
                .build();
    }
}
