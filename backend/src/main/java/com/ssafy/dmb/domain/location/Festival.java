package com.ssafy.dmb.domain.location;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Festival {

    @Id @GeneratedValue
    @Column(name = "festival_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="region_id")
    private Region region;

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

}
