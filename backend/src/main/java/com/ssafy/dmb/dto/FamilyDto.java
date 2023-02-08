package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.Family;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class FamilyDto {

    @Getter
    @Builder
    @AllArgsConstructor
    public static class familyResponse {

        private String familyName;
        private String invitation;

        public familyResponse(Family family) {
            this.familyName = family.getFamilyName();
            this.invitation = family.getInvitation();
        }

    }
    @Getter
    @Builder
    @AllArgsConstructor
    public static class familyRequest {
        private String familyName;

        private String memberId;
    }

}
