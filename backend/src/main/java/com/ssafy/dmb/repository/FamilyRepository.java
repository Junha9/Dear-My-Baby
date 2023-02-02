package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.Family;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyRepository extends JpaRepository<Family, Long> {
}

