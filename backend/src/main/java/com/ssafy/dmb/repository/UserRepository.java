package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
