package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.baby.Baby;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;

public class BabyDto {

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response{

        private Long babyId;

        private String babyName;

        private int babyAge;
        private Long familyId;

        private Set<String> favoriteSpot = new HashSet<String>();


        private Set<String> favoriteFood = new HashSet<String>();

//        private Set<BabyCharacter> babyCharacterSet = new HashSet<BabyCharacter>();

        public Response(Baby baby) {
            this.babyId = baby.getId();
            this.familyId = baby.getFamily().getId();
            this.babyName = baby.getBabyName();
            this.babyAge = baby.getBabyAge();
            this.favoriteSpot = baby.getFavoriteSpot();
            this.favoriteFood = baby.getFavoriteFood();
        }

    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class BabyRequest{
        private Long familyId;

        private Set<String> favoriteSpot = new HashSet<String>();

        private Set<String> favoriteFood = new HashSet<String>();

        private String babyName;

        private int babyAge;

    }

}
