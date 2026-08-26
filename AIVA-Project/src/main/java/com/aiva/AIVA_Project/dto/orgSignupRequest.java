package com.aiva.AIVA_Project.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class orgSignupRequest {

    @NotBlank(message = "Company name is required")
    private String organizationName;

    @NotBlank(message = "Admin name is required")
    private String adminName;

    @Email(message = "Invalid email format")
    private String adminEmail;

    @NotBlank(message = "Password is required")
    private String password;
}
