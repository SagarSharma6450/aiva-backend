package com.aiva.AIVA_Project.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class startSessionRequest {

    @Min(value = 1, message = "Duration must be at least 1 minute")
    @Max(value = 20, message = "Duration cannot exceed 20 minutes")
    private Integer durationMinutes = 10;

    @Min(value = 1, message = "At least 1 question required")
    @Max(value = 10, message = "Maximum 10 questions allowed")
    private Integer questionCount = 5;
}
