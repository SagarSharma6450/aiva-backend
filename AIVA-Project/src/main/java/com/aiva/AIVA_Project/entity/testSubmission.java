package com.aiva.AIVA_Project.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "test_submissions")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class testSubmission {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long testId;
    private Long candidateId;
    private Long slotId;

    private LocalDateTime startedAt;
    private LocalDateTime completedAt;

    private Integer tabSwitchCount;
    private Integer fullscreenExitCount;
    private Integer multipleFacesCount;
    private Integer noFaceCount;
    private Integer noiseDetectedCount;
    private Integer devToolsCount;

    private String status; // IN_PROGRESS, COMPLETED, AUTO_SUBMITTED

    private Double totalScore;
    private Double maxPossibleScore;

    @Column(length = 2000)
    private String aiSummary;
}
