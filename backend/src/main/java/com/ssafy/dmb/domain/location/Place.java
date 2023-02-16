package com.ssafy.dmb.domain.location;

import com.ssafy.dmb.domain.plan.Day;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Place {

    @Id
    @GeneratedValue
    @Column(name = "place_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id")
    private Day day;

    private int placeOrder;

    private String placeName;

    private String placeLatitude;

    private String placeLongitude;

    private String placeAddress;

    @Builder
    public Place(Day day, int placeOrder, String placeName, String placeLatitude, String placeLongitude, String placeAddress) {
        this.day = day;
        this.placeOrder = placeOrder;
        this.placeName = placeName;
        this.placeLatitude = placeLatitude;
        this.placeLongitude = placeLongitude;
        this.placeAddress = placeAddress;
    }

    public Place(int placeOrder, String placeName, String placeLatitude, String placeLongitude, String placeAddress) {
        this.placeOrder = placeOrder;
        this.placeName = placeName;
        this.placeLatitude = placeLatitude;
        this.placeLongitude = placeLongitude;
        this.placeAddress = placeAddress;
    }


}
