package com.aiva.AIVA_Project.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class proctorResult {
    private boolean autoSubmitted;
    private String type;
    private Integer count;   // how many of this violation so far
    private Integer allowed; // how many the admin allows
}
