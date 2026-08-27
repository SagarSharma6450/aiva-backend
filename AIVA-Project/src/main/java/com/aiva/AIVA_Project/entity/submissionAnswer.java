package com.aiva.AIVA_Project.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "submission_answers")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class submissionAnswer {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long submissionId;
    private Long questionId;

    private String selectedOption; // "A","B","C","D"
    private Boolean isCorrect;

    private Double maxMarks;
    private Double aiScore;

    @Column(length = 500)
    private String aiFeedback;
}
