package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.user.FamilyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyUserRepository extends JpaRepository<FamilyUser, Long> {
}