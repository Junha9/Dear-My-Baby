package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.location.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    @Query("select l from Location l where l.region.id = :regionId")
    List<Location> findAllByRegion(@Param("regionId") Long regionId);

//    @Query
//    public List<>
}
