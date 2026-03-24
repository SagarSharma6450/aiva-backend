package com.aiva.AIVA_Project.controller;

import com.aiva.AIVA_Project.security.jwtUtil;
import com.aiva.AIVA_Project.service.resumeService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/resume")
@CrossOrigin
public class resumeController {

    private final resumeService resumeService;
    private final jwtUtil jwtUtil;

    public resumeController(resumeService resumeService, jwtUtil jwtUtil) {
        this.resumeService = resumeService;
        this.jwtUtil = jwtUtil;
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

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadResume(HttpServletRequest request,
                               @RequestParam("file") MultipartFile file) {
        String email = getEmailFromRequest(request);
        return resumeService.uploadResume(email, file);
    }

    @GetMapping("/status")
    public boolean hasResume(HttpServletRequest request) {
        String email = getEmailFromRequest(request);
        String text = resumeService.getResumeText(email);
        return text != null && !text.isBlank();
    }
}
