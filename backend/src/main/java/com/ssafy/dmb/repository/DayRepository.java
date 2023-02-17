package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.plan.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DayRepository extends JpaRepository<Day,Long> {
}
