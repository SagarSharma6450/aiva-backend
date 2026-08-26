package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.testQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface testQuestionRepository extends JpaRepository<testQuestion, Long> {
    List<testQuestion> findByTestIdOrderByOrderIndexAsc(Long testId);
}
