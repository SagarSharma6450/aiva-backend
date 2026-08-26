package com.aiva.AIVA_Project.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class user {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role;
    
    @Column(columnDefinition = "TEXT")
    private String resumeText;

    private String profession;      // STUDENT or WORKING_PROFESSIONAL
    private String designation;     // e.g. "Software Engineer" - for working professionals

    private LocalDateTime createdAt;
    
    private Long organizationId; // null for candidates not tied to an org

    // Candidate education fields (replace/extend profession+designation usage)
    private String highestQualification; // e.g. B.Tech, M.Sc
    private String institution;
    private Integer graduationYear;
}
