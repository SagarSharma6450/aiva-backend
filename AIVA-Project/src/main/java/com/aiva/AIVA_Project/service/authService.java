package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.entity.organization;
import com.aiva.AIVA_Project.entity.user;
import com.aiva.AIVA_Project.dto.loginRequest;
import com.aiva.AIVA_Project.dto.orgSignupRequest;
import com.aiva.AIVA_Project.dto.signupRequest;
import com.aiva.AIVA_Project.repository.organizationRepository;
import com.aiva.AIVA_Project.repository.userRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class authService {

    private final userRepository userRepository;
    private final organizationRepository organizationRepository;
    private final PasswordEncoder passwordEncoder;

    public authService(userRepository userRepository,
                        organizationRepository organizationRepository,
                        PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.organizationRepository = organizationRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Candidate signup (existing flow, role forced to CANDIDATE)
    public String signup(signupRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        user user = com.aiva.AIVA_Project.entity.user.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role("CANDIDATE")
                .highestQualification(request.getHighestQualification())
                .institution(request.getInstitution())
                .graduationYear(request.getGraduationYear())
                .createdAt(LocalDateTime.now())
                .build();

        userRepository.save(user);
        return "User registered successfully";
    }

    // Company signup: creates organization + first ORG_ADMIN user
    public String signupOrgAdmin(orgSignupRequest request) {
        if (userRepository.existsByEmail(request.getAdminEmail())) {
            throw new RuntimeException("Email already registered");
        }
        if (organizationRepository.findByContactEmail(request.getAdminEmail()).isPresent()) {
            throw new RuntimeException("Organization already registered with this email");
        }

        organization org = organization.builder()
                .name(request.getOrganizationName())
                .contactEmail(request.getAdminEmail())
                .createdAt(LocalDateTime.now())
                .build();
        org = organizationRepository.save(org);

        user admin = user.builder()
                .name(request.getAdminName())
                .email(request.getAdminEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role("ORG_ADMIN")
                .organizationId(org.getId())
                .createdAt(LocalDateTime.now())
                .build();
        userRepository.save(admin);

        return "Organization and admin account created successfully";
    }

    public String login(loginRequest request) {
        user user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        return "Login successful";
    }
}
