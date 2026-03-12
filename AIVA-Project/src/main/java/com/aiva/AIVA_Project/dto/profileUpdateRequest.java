package com.aiva.AIVA_Project.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class profileUpdateRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Profession is required")
    @Pattern(regexp = "STUDENT|WORKING_PROFESSIONAL", message = "Profession must be STUDENT or WORKING_PROFESSIONAL")
    private String profession;

    private String designation;  // required when profession is WORKING_PROFESSIONAL
}
