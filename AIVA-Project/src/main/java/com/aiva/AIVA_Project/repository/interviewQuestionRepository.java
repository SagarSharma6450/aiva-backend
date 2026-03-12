package com.aiva.AIVA_Project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aiva.AIVA_Project.entity.interviewQuestions;
public interface interviewQuestionRepository extends JpaRepository<interviewQuestions, Long> {

    List<interviewQuestions> findBySessionId(Long sessionId);
}
