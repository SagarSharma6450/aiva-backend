package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.testSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface testSubmissionRepository extends JpaRepository<testSubmission, Long> {
    List<testSubmission> findByTestId(Long testId);
    List<testSubmission> findByTestIdAndCandidateIdOrderByStartedAtDesc(Long testId, Long candidateId);
}
