package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.profileResponse;
import com.aiva.AIVA_Project.dto.profileUpdateRequest;
import com.aiva.AIVA_Project.entity.user;
import com.aiva.AIVA_Project.repository.userRepository;
import org.springframework.stereotype.Service;

@Service
public class profileService {

    private final userRepository userRepository;

    public profileService(userRepository userRepository) {
        this.userRepository = userRepository;
    }

    public profileResponse getProfile(String email) {
        user user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return profileResponse.builder()
                .name(user.getName())
                .email(user.getEmail())
                .profession(user.getProfession())
                .designation(user.getDesignation())
                .build();
    }

    public profileResponse updateProfile(String email, profileUpdateRequest request) {
        user user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if ("WORKING_PROFESSIONAL".equals(request.getProfession()) && 
            (request.getDesignation() == null || request.getDesignation().isBlank())) {
            throw new RuntimeException("Designation is required for working professionals");
        }

        user.setName(request.getName());
        user.setProfession(request.getProfession());
        user.setDesignation("WORKING_PROFESSIONAL".equals(request.getProfession()) 
                ? request.getDesignation() : null);

        userRepository.save(user);

        return profileResponse.builder()
                .name(user.getName())
                .email(user.getEmail())
                .profession(user.getProfession())
                .designation(user.getDesignation())
                .build();
    }
}
