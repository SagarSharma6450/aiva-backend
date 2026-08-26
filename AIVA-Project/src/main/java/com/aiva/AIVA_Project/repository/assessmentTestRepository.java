package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.assessmentTest;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface assessmentTestRepository extends JpaRepository<assessmentTest, Long> {
    List<assessmentTest> findByOrganizationId(Long organizationId);
}
