package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.location.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {

    @Query("select t from Tour t where t.tourCategory In (:favorites)")
    List<Tour> findTourByFavoriteSpot(@Param("favorites") Set<String> favorites);

}
