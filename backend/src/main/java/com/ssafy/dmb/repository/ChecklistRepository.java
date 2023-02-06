package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.plan.Checklist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChecklistRepository extends JpaRepository<Checklist,Long> {


    @Query("select c from Checklist c where c.plan.id = :planId")
    List<Checklist> findAllByPlanId(@Param("planId") Long planId);
}
