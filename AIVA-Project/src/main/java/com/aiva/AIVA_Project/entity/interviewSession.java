package com.aiva.AIVA_Project.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "interview_sessions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class interviewSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String role; // e.g., Java Developer

    private Integer durationMinutes;  // max 20
    private Integer questionCount;    // max 10

    private LocalDateTime startedAt;

    private LocalDateTime completedAt;

    private Double score;

    @Column(columnDefinition = "TEXT")
    private String feedbackSummary;
}
