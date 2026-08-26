package com.aiva.AIVA_Project.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class candidateQuestionView {
    private Long questionId;
    private String questionText;
    private Integer currentIndex; // 1-based
    private Integer totalQuestions;
    private String savedAnswer; // if candidate returns to a saved answer
}
