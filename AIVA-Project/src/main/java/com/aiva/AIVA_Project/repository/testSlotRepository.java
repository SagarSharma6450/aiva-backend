package com.aiva.AIVA_Project.repository;

import com.aiva.AIVA_Project.entity.testSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface testSlotRepository extends JpaRepository<testSlot, Long> {
    List<testSlot> findByTestId(Long testId);
}
