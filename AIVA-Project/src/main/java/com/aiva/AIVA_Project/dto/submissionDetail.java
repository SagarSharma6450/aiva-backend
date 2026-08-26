package com.aiva.AIVA_Project.dto;

import lombok.*;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class submissionDetail {
    private submissionSummary candidate;
    private List<answerDetail> answers;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class answerDetail {
        private String questionText;
        private String candidateAnswer;
        private Double maxMarks;
        private Double aiScore;
        private String aiFeedback;
    }
}
