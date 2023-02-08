package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.location.Festival;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long> {
    @Query("select f from Festival f where f.festivalCategory In (:favorites)")
    List<Festival> findFestivalByFavoriteSpot(@Param("favorites") Set<String> favorites);

}
