package com.aiva.AIVA_Project.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "test_questions")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class testQuestion {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long testId;

    @Column(length = 2000)
    private String questionText;

    private Double maxMarks;
    private Integer orderIndex;
}
