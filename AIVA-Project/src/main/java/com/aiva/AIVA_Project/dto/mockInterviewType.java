package com.aiva.AIVA_Project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class mockInterviewType {

    private String id;
    private String title;
    private String description;
}
