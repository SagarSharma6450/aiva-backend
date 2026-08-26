package com.aiva.AIVA_Project.controller;

import com.aiva.AIVA_Project.dto.submissionDetail;
import com.aiva.AIVA_Project.dto.submissionSummary;
import com.aiva.AIVA_Project.service.adminReportService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/reports")
@CrossOrigin
@PreAuthorize("hasAnyRole('ORG_ADMIN','SUPER_ADMIN')")
public class adminReportController {

    private final adminReportService adminReportService;

    public adminReportController(adminReportService adminReportService) {
        this.adminReportService = adminReportService;
    }

    @GetMapping("/tests/{testId}/submissions")
    public List<submissionSummary> listSubmissions(@PathVariable Long testId) {
        return adminReportService.listSubmissions(testId);
    }

    @GetMapping("/submissions/{submissionId}")
    public submissionDetail getSubmissionDetail(@PathVariable Long submissionId) {
        return adminReportService.getSubmissionDetail(submissionId);
    }
}
