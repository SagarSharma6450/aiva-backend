package com.aiva.AIVA_Project.dto;

import lombok.Data;

@Data
public class interviewAnswerRequest {

    private Long sessionId;

    private Long questionId;

    private String answer;
}
