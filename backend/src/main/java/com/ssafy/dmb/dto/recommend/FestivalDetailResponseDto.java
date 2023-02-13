package com.ssafy.dmb.dto.recommend;

import com.ssafy.dmb.domain.location.Festival;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class FestivalDetailResponseDto {

    // 축제명
    private String festivalName;

    // 축제 카테고리
    private String festivalCategory;

    // 축제 문의 전화번호
    private String festivalPhoneNumber;

    // 축제 개요
    private String festivalOutline;

    // 축제 주소
    private String festivalAddress;

    // 축제 위도
    private String festivalLatitude;

    // 축제 경도
    private String festivalLongitude;

    // 축제 시작일
    private String festivalStartDay;

    // 축제 종료일
    private String festivalClosedDay;


    // 축제 장소
    private String festivalPlace;

    // 축제 이용요금
    private String festivalFee;

    // 축제 관람 소요시간
    private String festivalVisitHour;

    // 축제 나이제한
    private String festivalAvlAge;

    // 축제 주차 가능 여부
    private String festivalAvlParking;

    // 축제 img
    private String festivalImgUrl;

    private Long regionId;

    public FestivalDetailResponseDto(Festival festival) {
        this.regionId = festival.getRegion().getId();
        this.festivalName = festival.getFestivalName();
        this.festivalCategory = festival.getFestivalCategory();
        this.festivalPhoneNumber = festival.getFestivalPhoneNumber();
        this.festivalOutline = festival.getFestivalOutline();
        this.festivalAddress = festival.getFestivalAddress();
        this.festivalLatitude = festival.getFestivalLatitude();
        this.festivalLongitude = festival.getFestivalLongitude();
        this.festivalStartDay = festival.getFestivalStartDay();
        this.festivalClosedDay = festival.getFestivalClosedDay();
        this.festivalPlace = festival.getFestivalPlace();
        this.festivalFee = festival.getFestivalFee();
        this.festivalAvlAge = festival.getFestivalAvlAge();
        this.festivalAvlParking = festival.getFestivalAvlParking();
        this.festivalImgUrl = festival.getFestivalImgUrl();
    }

}
