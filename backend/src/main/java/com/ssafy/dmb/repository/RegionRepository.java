package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.location.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {

    @Query("select r.id, r.regionName, r.regionImgUrl from Region r")
    List<Region> findNameAndImg();

    @Query("select r from Region r where r.regionName = :planName")
    Region findByPlanName(@Param("planName") String planName);
}
