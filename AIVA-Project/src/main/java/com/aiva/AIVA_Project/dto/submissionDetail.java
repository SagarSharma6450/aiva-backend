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
        private String optionA;
        private String optionB;
        private String optionC;
        private String optionD;
        private String selectedOption;
        private String correctOption;
        private Boolean isCorrect;
        private Double maxMarks;
        private Double aiScore;
    }
}
