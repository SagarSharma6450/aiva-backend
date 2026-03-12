package com.aiva.AIVA_Project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class questionResponse {

    private Long questionId;
    private String questionText;
    private Integer currentQuestion;
    private Integer totalQuestions;
    private Boolean hasMore;
    private String userAnswer;
}
