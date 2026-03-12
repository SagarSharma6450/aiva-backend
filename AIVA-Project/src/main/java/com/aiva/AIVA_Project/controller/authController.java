package com.aiva.AIVA_Project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aiva.AIVA_Project.dto.loginRequest;
import com.aiva.AIVA_Project.dto.signupRequest;
import com.aiva.AIVA_Project.entity.user;
import com.aiva.AIVA_Project.repository.userRepository;
import com.aiva.AIVA_Project.security.jwtUtil;
import com.aiva.AIVA_Project.service.authService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class authController {

    @Autowired
    private jwtUtil jwtUtil;

    private authService authService;
    private userRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public authController(authService authService, userRepository userRepository, PasswordEncoder passwordEncoder) {
        this.authService = authService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/test")
    public String test() {
        return "Protected API working";
    }
    
    @PostMapping("/signup")
    public String signup(@Valid @RequestBody signupRequest request) {
        return authService.signup(request);
    }

    @PostMapping("/login")
    public String login(@Valid @RequestBody loginRequest request) {
        user user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return token;
    }
}