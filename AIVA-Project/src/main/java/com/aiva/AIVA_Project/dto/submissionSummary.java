package com.aiva.AIVA_Project.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class submissionSummary {
    private Long submissionId;
    private String candidateName;
    private String candidateEmail;
    private String highestQualification;
    private String institution;
    private Integer graduationYear;
    private String status;
    private Double totalScore;
    private Double maxPossibleScore;
    private Integer tabSwitchCount;
    private Integer fullscreenExitCount;
    private Integer multipleFacesCount;
    private Integer noFaceCount;
    private Integer noiseDetectedCount;
    private Integer devToolsCount;
    private LocalDateTime completedAt;
}
