package com.aiva.AIVA_Project.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "test_slots")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class testSlot {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long testId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
