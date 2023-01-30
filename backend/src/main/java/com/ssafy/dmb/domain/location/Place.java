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

    private int placeOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id")
    private Day day;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "location_id")
    private Location location;
}
