package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.user.Family;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class FamilyDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class familyResponse {

        private String familyName;
        private String invitation;

        public familyResponse(Family family) {
            this.familyName = family.getFamilyName();
            this.invitation = family.getInvitation();
        }

    }
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class familyRequest {
        private String familyName;

        private String memberId;
    }

}
