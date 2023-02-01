package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.plan.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan, Long> {
}