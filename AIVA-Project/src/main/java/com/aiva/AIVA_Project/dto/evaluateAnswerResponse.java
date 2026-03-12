package com.aiva.AIVA_Project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class evaluateAnswerResponse {

    private String evaluation;
    private Boolean hasNextQuestion;
    private questionResponse nextQuestion;  // null if interview complete
}
