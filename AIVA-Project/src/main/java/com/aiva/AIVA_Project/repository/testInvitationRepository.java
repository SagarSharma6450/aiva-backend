package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.testInvitation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface testInvitationRepository extends JpaRepository<testInvitation, Long> {
    List<testInvitation> findByCandidateEmail(String email);
    List<testInvitation> findByTestIdAndCandidateEmailOrderByInvitedAtDesc(Long testId, String email);
    List<testInvitation> findByTestId(Long testId);
    List<testInvitation> findBySlotId(Long slotId);
    void deleteBySlotId(Long slotId);
}
