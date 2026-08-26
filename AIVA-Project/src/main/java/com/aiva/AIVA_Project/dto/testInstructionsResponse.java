package com.aiva.AIVA_Project.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class testInstructionsResponse {
    private String title;
    private String description;
    private Integer durationMinutes;
    private Integer questionCount;
    private Boolean requireCamera;
    private Boolean requireMicrophone;
    private Boolean requireFullscreen;
    private Integer maxTabSwitchWarnings;
}
