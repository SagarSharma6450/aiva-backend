package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.submissionAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface submissionAnswerRepository extends JpaRepository<submissionAnswer, Long> {
    List<submissionAnswer> findBySubmissionId(Long submissionId);
    Optional<submissionAnswer> findBySubmissionIdAndQuestionId(Long submissionId, Long questionId);
    void deleteBySubmissionId(Long submissionId);
}
