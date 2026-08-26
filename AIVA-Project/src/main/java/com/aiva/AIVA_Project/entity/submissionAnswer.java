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

    @Column(length = 3000)
    private String candidateAnswer;

    private Double maxMarks;
    private Double aiScore;

    @Column(length = 1000)
    private String aiFeedback;
}
