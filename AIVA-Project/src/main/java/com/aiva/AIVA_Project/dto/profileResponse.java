package com.aiva.AIVA_Project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class profileResponse {

    private String name;
    private String email;
    private String profession;   // STUDENT or WORKING_PROFESSIONAL
    private String designation;  // null for students
}
