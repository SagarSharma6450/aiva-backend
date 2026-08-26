package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.testInvitation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface testInvitationRepository extends JpaRepository<testInvitation, Long> {
    List<testInvitation> findByCandidateEmail(String email);
    Optional<testInvitation> findByTestIdAndCandidateEmail(Long testId, String email);
    List<testInvitation> findByTestId(Long testId);
}
