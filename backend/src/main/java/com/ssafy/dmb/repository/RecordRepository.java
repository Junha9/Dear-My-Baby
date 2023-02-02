package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.record.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

    @Query("select r from Record r where r.day.id = :dayId and r.day.plan.id = :planId")
    List<Record> findAllByDayId(@Param("dayId") Long dayId, @Param("planId") Long planId);

    @Query("select r from Record r join fetch r.day d where r.day.plan.id = :planId")
    List<Record> findAllByPlanId(@Param("planId") Long planId);


}
