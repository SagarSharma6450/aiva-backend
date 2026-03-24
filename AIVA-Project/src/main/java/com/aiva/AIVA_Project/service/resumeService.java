package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.repository.userRepository;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class resumeService {

    private final userRepository userRepository;

    public resumeService(userRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String uploadResume(String email, MultipartFile file) {
    try {
        PDDocument document = Loader.loadPDF(file.getBytes());
        PDFTextStripper stripper = new PDFTextStripper();
        String resumeText = stripper.getText(document);
        document.close();

        var user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setResumeText(resumeText);
        userRepository.save(user);

        return "Resume uploaded successfully";
    } catch (Exception e) {
        throw new RuntimeException("Failed to process resume: " + e.getMessage());
    }
}

    public String getResumeText(String email) {
        var user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getResumeText();
    }
}
