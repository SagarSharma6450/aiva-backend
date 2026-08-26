package com.aiva.AIVA_Project.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class candidateTestSummary {
    private Long testId;
    private String title;
    private String roleCategory;
    private Integer durationMinutes;
    private Integer questionCount;
    private String status;
    private LocalDateTime slotStart;
    private LocalDateTime slotEnd;
    private Long slotId;
}
