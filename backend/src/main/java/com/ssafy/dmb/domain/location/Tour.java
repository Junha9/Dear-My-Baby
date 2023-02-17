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
public class Tour {

    @Id @GeneratedValue
    @Column(name = "tour_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="region_id")
    private Region region;

    // 관광지 명
    private String tourName;

    // 관광지 카테고리
    private String tourCategory;

    // 관광지 주소
    private String tourAddress;

    // 관광지 위도
    private String tourLatitude;

    // 관광지 경도
    private String tourLongitude;

    // 관광지 문의 전화번호
    private String tourPhoneNumber;

    // 관광지 개요
    private String tourOutline;

    // 관광지 휴무일
    private String tourClosedDay;

    // 관광지 이용시간
    private String tourOpeningHours;

    // 관광지 주차가능여보
    private String tourAvlParking;

    // 관광지 유모차 대여 여보
    private String tourAvlStrollerRental;

    // 관광지 img
    private String tourImgUrl;

}
