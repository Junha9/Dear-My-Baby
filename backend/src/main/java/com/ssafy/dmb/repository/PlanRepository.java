package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.plan.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Plan,Long> {

    @Query("select p from Plan p where p.family.id = :familyId")
    List<Plan> findAllByFamily(@Param("familyId") Long familyId);
}

