package com.aiva.AIVA_Project.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "assessment_tests")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class assessmentTest {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long organizationId;
    private String title;

    @Column(length = 2000)
    private String description;

    private String roleCategory;
    private Integer durationMinutes;
    private Integer questionCount;

    private Boolean requireCamera;
    private Boolean requireMicrophone;
    private Boolean requireFullscreen;
    private Integer maxTabSwitchWarnings;

    private Long createdByUserId;
    private LocalDateTime createdAt;
    private Boolean active;
}
