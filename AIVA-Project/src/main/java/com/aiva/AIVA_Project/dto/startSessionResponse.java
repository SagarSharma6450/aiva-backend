package com.aiva.AIVA_Project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class startSessionResponse {

    private Long sessionId;
    private String role;
    private Integer durationMinutes;
    private Integer questionCount;
}
