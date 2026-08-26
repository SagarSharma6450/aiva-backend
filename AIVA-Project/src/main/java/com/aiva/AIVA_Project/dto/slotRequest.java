package com.aiva.AIVA_Project.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class slotRequest {
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
