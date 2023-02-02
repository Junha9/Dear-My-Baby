package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.baby.Baby;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BabyRepository extends JpaRepository<Baby, Long> {


}
