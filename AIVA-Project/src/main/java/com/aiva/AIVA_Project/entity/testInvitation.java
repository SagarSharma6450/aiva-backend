package com.aiva.AIVA_Project.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "test_invitations")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class testInvitation {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long testId;
    private Long slotId;
    private String candidateEmail;
    private String status; // INVITED, STARTED, COMPLETED, EXPIRED
    private LocalDateTime invitedAt;
}
