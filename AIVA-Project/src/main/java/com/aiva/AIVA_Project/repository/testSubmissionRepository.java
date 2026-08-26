package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.testSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface testSubmissionRepository extends JpaRepository<testSubmission, Long> {
    List<testSubmission> findByTestId(Long testId);
    Optional<testSubmission> findByTestIdAndCandidateId(Long testId, Long candidateId);
}
