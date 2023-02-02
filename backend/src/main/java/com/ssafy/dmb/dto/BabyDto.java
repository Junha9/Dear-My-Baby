package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.baby.BabyCharacter;
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
        private Long familyId;

        private Set<String> favoriteSpot = new HashSet<String>();

        private Set<String> babyCharacter = new HashSet<String>();

        private Set<String> favoriteFood = new HashSet<String>();

//        private Set<BabyCharacter> babyCharacterSet = new HashSet<BabyCharacter>();

        public Response(Baby baby) {
            this.familyId = baby.getFamily().getId();
            this.favoriteSpot = baby.getFavoriteSpot();
            this.babyCharacter = baby.getBabyCharacter();
            this.favoriteFood = baby.getFavoriteFood();
        }

    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Request{
        private Long familyId;

        private Set<String> favoriteSpot = new HashSet<String>();

        private Set<String> babyCharacter = new HashSet<String>();

        private Set<String> favoriteFood = new HashSet<String>();

    }

}
