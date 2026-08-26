package com.aiva.AIVA_Project.dto;

import lombok.Data;

@Data
public class createTestRequest {
    private String title;
    private String description;
    private String roleCategory;
    private Integer durationMinutes;
    private Integer questionCount;
    private Boolean requireCamera;
    private Boolean requireMicrophone;
    private Boolean requireFullscreen;
    private Integer maxTabSwitchWarnings;
}
