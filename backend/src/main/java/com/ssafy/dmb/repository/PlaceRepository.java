package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.location.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
    @Query("select p from Place p where p.day.id = :dayId")
    List<Place> findAllByDayId(@Param("dayId") Long dayId);
    @Modifying
    @Transactional
    @Query("delete from Place p where p.day.id = :dayId")
    void deleteByDayId(@Param("dayId") Long dayId);

}
