package com.aiva.AIVA_Project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class interviewResultResponse {

    private Double score;

    private String strengths;

    private String weaknesses;

    private String improvements;

    private String interviewTips;
}
