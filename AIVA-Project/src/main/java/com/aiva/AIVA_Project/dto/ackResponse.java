package com.aiva.AIVA_Project.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ackResponse {
    private boolean saved;
    private boolean hasNext;
    private Integer nextIndex;
}
