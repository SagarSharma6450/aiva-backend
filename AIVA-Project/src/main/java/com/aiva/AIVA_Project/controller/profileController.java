package com.aiva.AIVA_Project.controller;

import com.aiva.AIVA_Project.dto.profileResponse;
import com.aiva.AIVA_Project.dto.profileUpdateRequest;
import com.aiva.AIVA_Project.service.profileService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import com.aiva.AIVA_Project.security.jwtUtil;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class profileController {

    private final profileService profileService;
    private final jwtUtil jwtUtil;

    public profileController(profileService profileService, jwtUtil jwtUtil) {
        this.profileService = profileService;
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

    @GetMapping
    public profileResponse getProfile(HttpServletRequest request) {
        String email = getEmailFromRequest(request);
        return profileService.getProfile(email);
    }

    @PutMapping
    public profileResponse updateProfile(HttpServletRequest request,
                                         @Valid @RequestBody profileUpdateRequest body) {
        String email = getEmailFromRequest(request);
        return profileService.updateProfile(email, body);
    }
}
