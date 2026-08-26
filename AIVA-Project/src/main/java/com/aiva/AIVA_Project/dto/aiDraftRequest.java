package com.aiva.AIVA_Project.dto;

import lombok.Data;

@Data
public class aiDraftRequest {
    private String roleCategory;
    private String topics;
    private Integer count;
}
