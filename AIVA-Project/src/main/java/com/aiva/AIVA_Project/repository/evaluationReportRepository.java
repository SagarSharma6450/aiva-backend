package com.aiva.AIVA_Project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aiva.AIVA_Project.entity.evaluationReport;

public interface evaluationReportRepository extends JpaRepository<evaluationReport, Long> {

    Optional<evaluationReport> findBySessionId(Long sessionId);
}