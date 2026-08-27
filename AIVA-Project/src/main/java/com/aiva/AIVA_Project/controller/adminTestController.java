package com.aiva.AIVA_Project.controller;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.entity.*;
import com.aiva.AIVA_Project.security.authContext;
import com.aiva.AIVA_Project.service.adminTestService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/tests")
@CrossOrigin
@PreAuthorize("hasAnyRole('ORG_ADMIN','SUPER_ADMIN')")
public class adminTestController {

    private final adminTestService adminTestService;
    private final authContext authContext;

    public adminTestController(adminTestService adminTestService, authContext authContext) {
        this.adminTestService = adminTestService;
        this.authContext = authContext;
    }

    @PostMapping
    public assessmentTest createTest(HttpServletRequest request, @RequestBody createTestRequest req) {
        Long orgId = authContext.getOrgId(request);
        String email = authContext.getEmail(request);
        return adminTestService.createTest(orgId, email, req);
    }

    @GetMapping
    public List<assessmentTest> listTests(HttpServletRequest request) {
        return adminTestService.listTests(authContext.getOrgId(request));
    }

    @GetMapping("/{testId}")
    public assessmentTest getTest(@PathVariable Long testId) {
        return adminTestService.getTest(testId);
    }

    @PutMapping("/{testId}")
    public assessmentTest updateTest(@PathVariable Long testId, @RequestBody createTestRequest req) {
        return adminTestService.updateTest(testId, req);
    }

    @PostMapping("/{testId}/questions")
    public List<testQuestion> addQuestions(@PathVariable Long testId, @RequestBody List<questionInput> questions) {
        return adminTestService.addQuestions(testId, questions);
    }

    @PostMapping("/{testId}/questions/ai-draft")
    public List<questionInput> draftQuestions(@PathVariable Long testId, @RequestBody aiDraftRequest req) {
        return adminTestService.draftQuestionsWithAi(req);
    }

    @PostMapping("/{testId}/slots")
    public testSlot createSlot(@PathVariable Long testId, @RequestBody slotRequest req) {
        return adminTestService.createSlot(testId, req);
    }

    @PutMapping("/{testId}/slots/{slotId}")
    public testSlot updateSlot(@PathVariable Long testId, @PathVariable Long slotId, @RequestBody slotRequest req) {
        return adminTestService.updateSlot(slotId, req);
    }

    @DeleteMapping("/{testId}/slots/{slotId}")
    public void deleteSlot(@PathVariable Long testId, @PathVariable Long slotId) {
        adminTestService.deleteSlot(slotId);
    }

    @GetMapping("/{testId}/slots")
    public List<testSlot> listSlots(@PathVariable Long testId) {
        return adminTestService.listSlots(testId);
    }

    @PostMapping("/{testId}/invite")
    public List<testInvitation> inviteCandidates(@PathVariable Long testId,
                                                  @RequestParam Long slotId,
                                                  @RequestBody List<String> emails) {
        return adminTestService.inviteCandidates(testId, slotId, emails);
    }

    @GetMapping("/{testId}/invitations")
    public List<testInvitation> listInvitations(@PathVariable Long testId) {
        return adminTestService.listInvitations(testId);
    }
}
