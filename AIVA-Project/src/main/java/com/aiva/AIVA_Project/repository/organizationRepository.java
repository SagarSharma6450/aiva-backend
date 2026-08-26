package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.organization;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface organizationRepository extends JpaRepository<organization, Long> {
    Optional<organization> findByContactEmail(String email);
}
