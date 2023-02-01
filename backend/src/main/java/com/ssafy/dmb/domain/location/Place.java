package com.ssafy.dmb.domain.location;

import com.ssafy.dmb.domain.plan.Day;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Place {

    @Id @GeneratedValue
    @Column(name = "place_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "day_id")
    private Day day;

    private int placeOrder;

    private String placeName;

    private LocationType placeType;

    private String placeLatitude;

    private String placeLongitude;

    private String placeAddress;

}
