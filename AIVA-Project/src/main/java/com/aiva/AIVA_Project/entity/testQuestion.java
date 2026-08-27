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

    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctOption; // "A", "B", "C", or "D"

    private Double maxMarks;
    private Integer orderIndex;
}
