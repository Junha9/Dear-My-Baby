package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.location.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    @Query("select r from Restaurant r where r.restaurantCategory In (:favorites)")
    List<Restaurant> findTourByFavoriteRestaurant(@Param("favorites") Set<String> favorites);

}
