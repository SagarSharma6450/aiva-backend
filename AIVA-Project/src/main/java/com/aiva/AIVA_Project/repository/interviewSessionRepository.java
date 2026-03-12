package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.interviewSession;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface interviewSessionRepository extends JpaRepository<interviewSession, Long> {

    List<interviewSession> findByUserId(Long userId);

    List<interviewSession> findByUserIdOrderByStartedAtDesc(Long userId);
}
