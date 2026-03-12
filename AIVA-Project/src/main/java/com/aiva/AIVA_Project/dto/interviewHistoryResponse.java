package com.aiva.AIVA_Project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class interviewHistoryResponse {

    private int totalInterviews;
    private double averageScore;
    private double bestScore;
    private List<HistoryItem> sessions;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class HistoryItem {
        private Long sessionId;
        private String role;
        private Double score;
        private Integer questionCount;
        private LocalDateTime startedAt;
        private LocalDateTime completedAt;
    }
}
