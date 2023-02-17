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
public class Restaurant {

    @Id @GeneratedValue
    @Column(name = "restaurant_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="region_id")
    private Region region;

    // 식당명
    private String restaurantName;

    // 식당 카테고리
    private String restaurantCategory;

    // 식당 주소
    private String restaurantAddress;

    // 식당 위도
    private String restaurantLatitude;

    // 식당 경도
    private String restaurantLongitude;

    // 식당 개요
    private String restaurantOutline;

    // 식당 문의 전화번호
    private String restaurantPhoneNumber;

    // 식당 주차 가능 여부
    private String restaurantAvlParking;

    // 식당 영업시간
    private String restaurantOpeningHours;

    // 식당 휴무일
    private String restaurantClosedDay;

    // 식당 메인메뉴
    private String restaurantMainMenu;

    // 식당 img
    private String restaurantImgUrl;

}
