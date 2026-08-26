package com.aiva.AIVA_Project.service;

import org.springframework.stereotype.Service;

@Service
public class assessmentGradingService {

    private final groqService groqService;

    public assessmentGradingService(groqService groqService) {
        this.groqService = groqService;
    }

    public static class GradeResult {
        public double score;
        public String feedback;
    }

    public GradeResult gradeAnswer(String questionText, String candidateAnswer, double maxMarks) {
        String systemPrompt = "You are a strict technical grader for a hiring assessment. " +
                "Score the candidate's answer out of " + maxMarks + " based on correctness and completeness. " +
                "If the answer is blank, irrelevant, or just '-', score 0. " +
                "Return EXACTLY this format with no extra text:\n" +
                "SCORE: <number>\nFEEDBACK: <one concise sentence>";

        String userPrompt = "Question: " + questionText + "\nCandidate Answer: " + candidateAnswer;

        String result = groqService.chat(systemPrompt, userPrompt);

        GradeResult gr = new GradeResult();
        gr.score = 0;
        gr.feedback = "";

        for (String line : result.split("\n")) {
            line = line.trim();
            if (line.startsWith("SCORE:")) {
                try {
                    String num = line.substring(6).trim().replaceAll("[^0-9.]", "");
                    gr.score = Double.parseDouble(num);
                    if (gr.score > maxMarks) gr.score = maxMarks;
                    if (gr.score < 0) gr.score = 0;
                } catch (NumberFormatException ignored) {}
            } else if (line.startsWith("FEEDBACK:")) {
                gr.feedback = line.substring(9).trim();
            }
        }
        return gr;
    }
}
