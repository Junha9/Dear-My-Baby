package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.user.Family;
import com.ssafy.dmb.dto.user.MemberResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

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
    public static class FamilyUserList {

        private String familyName;
        private String invitation;
        private List<MemberResponseDto> memberResponseDtoList;

        public FamilyUserList(Family family, List<MemberResponseDto> memberResponseDtoList) {
            this.memberResponseDtoList = memberResponseDtoList;
            this.familyName = family.getFamilyName();
            this.invitation = family.getInvitation();
        }
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class FamilyRequest {
        private String familyName;

        private String memberId;
    }

}
