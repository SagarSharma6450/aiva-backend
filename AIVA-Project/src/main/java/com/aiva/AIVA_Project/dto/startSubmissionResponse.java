package com.aiva.AIVA_Project.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class startSubmissionResponse {
    private Long submissionId;
    private Long firstQuestionId;
    private String firstQuestionText;
    private Integer totalQuestions;
}
