package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.location.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BabyRepository extends JpaRepository<Baby, Long> {


    @Query("select b from Baby b where b.family.id = :familyId")
    List<Baby> findByFamily(@Param("familyId") Long familyId);

}
