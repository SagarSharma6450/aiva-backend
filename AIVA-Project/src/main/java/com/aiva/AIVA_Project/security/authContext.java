package com.aiva.AIVA_Project.security;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;

@Component
public class authContext {

    private final jwtUtil jwtUtil;

    public authContext(jwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    private String extractToken(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Bearer ")) {
            throw new RuntimeException("Unauthorized");
        }
        return header.substring(7);
    }

    public String getEmail(HttpServletRequest request) {
        return jwtUtil.extractEmail(extractToken(request));
    }

    public Long getOrgId(HttpServletRequest request) {
        return jwtUtil.extractOrgId(extractToken(request));
    }

    public String getRole(HttpServletRequest request) {
        return jwtUtil.extractRole(extractToken(request));
    }
}
