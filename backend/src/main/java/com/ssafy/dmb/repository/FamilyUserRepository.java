package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.FamilyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyUserRepository extends JpaRepository<FamilyUser, Long> {
}