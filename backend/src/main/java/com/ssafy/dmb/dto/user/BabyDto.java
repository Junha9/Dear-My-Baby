package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.baby.Baby;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

public class BabyDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class BabyResponse {

        private Long babyId;

        private String babyName;

        private int babyAge;
        private Long familyId;

        private Set<String> favoriteSpot = new HashSet<String>();


        private Set<String> favoriteFood = new HashSet<String>();


        public BabyResponse(Baby baby) {
            this.babyId = baby.getId();
            this.familyId = baby.getFamily().getId();
            this.babyName = baby.getBabyName();
            this.babyAge = baby.getBabyAge();
            this.favoriteSpot = baby.getFavoriteSpot();
            this.favoriteFood = baby.getFavoriteFood();
        }

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class BabyRequest{
        private Long familyId;

        private Set<String> favoriteSpot = new HashSet<String>();

        private Set<String> favoriteFood = new HashSet<String>();

        private String babyName;

        private int babyAge;

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class BabyUpdateRequest{
        private Long familyId;

        private Set<String> favoriteSpot = new HashSet<String>();

        private Set<String> favoriteFood = new HashSet<String>();

    }

}
