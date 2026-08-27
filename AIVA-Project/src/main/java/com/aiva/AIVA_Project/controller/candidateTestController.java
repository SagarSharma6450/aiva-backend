package com.aiva.AIVA_Project.controller;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.security.authContext;
import com.aiva.AIVA_Project.service.candidateTestService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidate/tests")
@CrossOrigin
@PreAuthorize("hasRole('CANDIDATE')")
public class candidateTestController {

    private final candidateTestService candidateTestService;
    private final authContext authContext;

    public candidateTestController(candidateTestService candidateTestService, authContext authContext) {
        this.candidateTestService = candidateTestService;
        this.authContext = authContext;
    }

    @GetMapping
    public List<candidateTestSummary> getAssignedTests(HttpServletRequest request) {
        return candidateTestService.getAssignedTests(authContext.getEmail(request));
    }

    @GetMapping("/{testId}/instructions")
    public testInstructionsResponse getInstructions(@PathVariable Long testId) {
        return candidateTestService.getInstructions(testId);
    }

    @PostMapping("/{testId}/start")
    public startSubmissionResponse startTest(@PathVariable Long testId, HttpServletRequest request) {
        return candidateTestService.startTest(testId, authContext.getEmail(request));
    }

    @GetMapping("/submissions/{submissionId}/question/{index}")
    public candidateQuestionView getQuestion(@PathVariable Long submissionId, @PathVariable int index) {
        return candidateTestService.getQuestion(submissionId, index);
    }

    @PostMapping("/submissions/{submissionId}/question/{questionId}/answer")
    public ackResponse submitAnswer(@PathVariable Long submissionId, @PathVariable Long questionId,
                                     @RequestBody answerRequest req) {
        return candidateTestService.submitAnswer(submissionId, questionId, req.getSelectedOption());
    }

    @PostMapping("/submissions/{submissionId}/proctor-event")
    public void logProctorEvent(@PathVariable Long submissionId, @RequestBody proctorEvent event) {
        candidateTestService.logProctorEvent(submissionId, event.getType());
    }

    @PostMapping("/submissions/{submissionId}/complete")
    public candidateCompletionResponse complete(@PathVariable Long submissionId) {
        return candidateTestService.complete(submissionId);
    }
}
