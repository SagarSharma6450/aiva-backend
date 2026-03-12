package com.aiva.AIVA_Project.controller;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.security.jwtUtil;
import com.aiva.AIVA_Project.service.interviewService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/interview")
@CrossOrigin
public class interviewController {

    private final jwtUtil jwtUtil;
    private final interviewService interviewService;

    public interviewController(jwtUtil jwtUtil, interviewService interviewService) {
        this.jwtUtil = jwtUtil;
        this.interviewService = interviewService;
    }

    private String getEmailFromRequest(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new RuntimeException("Unauthorized");
        }
        String token = authHeader.substring(7);
        if (!jwtUtil.validateToken(token)) {
            throw new RuntimeException("Invalid token");
        }
        return jwtUtil.extractEmail(token);
    }

    @GetMapping("/types")
    public List<mockInterviewType> getMockInterviewTypes() {
        return List.of(
                mockInterviewType.builder()
                        .id("java")
                        .title("Java Developer")
                        .description("Core Java, OOP, Collections, Spring Boot")
                        .build(),
                mockInterviewType.builder()
                        .id("python")
                        .title("Python Developer")
                        .description("Python fundamentals, Django/Flask, Data structures")
                        .build(),
                mockInterviewType.builder()
                        .id("frontend")
                        .title("Frontend Developer")
                        .description("HTML, CSS, JavaScript, React")
                        .build(),
                mockInterviewType.builder()
                        .id("data-science")
                        .title("Data Science")
                        .description("Statistics, ML, Python, SQL")
                        .build(),
                mockInterviewType.builder()
                        .id("system-design")
                        .title("System Design")
                        .description("Scalability, APIs, Databases, Architecture")
                        .build(),
                mockInterviewType.builder()
                        .id("behavioral")
                        .title("HR / Behavioral")
                        .description("Tell me about yourself, situational questions")
                        .build()
        );
    }

    @PostMapping("/start/{typeId}")
    public startSessionResponse startSession(HttpServletRequest request,
                                             @PathVariable String typeId,
                                             @Valid @RequestBody startSessionRequest body) {
        String email = getEmailFromRequest(request);
        return interviewService.startSession(email, typeId, body);
    }

    @GetMapping("/{sessionId}/question")
    public questionResponse getNextQuestion(HttpServletRequest request, @PathVariable Long sessionId) {
        String email = getEmailFromRequest(request);
        return interviewService.getNextQuestion(sessionId, email);
    }

    @PostMapping("/{sessionId}/question/{questionId}/evaluate")
    public evaluateAnswerResponse evaluateAnswer(HttpServletRequest request,
                                                  @PathVariable Long sessionId,
                                                  @PathVariable Long questionId,
                                                  @RequestBody evaluateAnswerRequest body) {
        String email = getEmailFromRequest(request);
        return interviewService.evaluateAnswer(sessionId, questionId, body.getAnswer(), email);
    }

    @GetMapping("/{sessionId}/questions")
    public java.util.List<questionResponse> getAllQuestions(HttpServletRequest request,
                                                           @PathVariable Long sessionId) {
        String email = getEmailFromRequest(request);
        return interviewService.getAllQuestions(sessionId, email);
    }

    @PostMapping("/{sessionId}/question/{questionId}/submit")
    public evaluateAnswerResponse submitAnswer(HttpServletRequest request,
                                               @PathVariable Long sessionId,
                                               @PathVariable Long questionId,
                                               @RequestBody evaluateAnswerRequest body) {
        String email = getEmailFromRequest(request);
        return interviewService.submitAnswer(sessionId, questionId, body.getAnswer(), email);
    }

    @GetMapping("/{sessionId}/result")
    public interviewResultResponse getSessionResult(HttpServletRequest request,
                                                     @PathVariable Long sessionId) {
        String email = getEmailFromRequest(request);
        return interviewService.getSessionResult(sessionId, email);
    }

    @GetMapping("/history")
    public interviewHistoryResponse getHistory(HttpServletRequest request) {
        String email = getEmailFromRequest(request);
        return interviewService.getHistory(email);
    }
}
