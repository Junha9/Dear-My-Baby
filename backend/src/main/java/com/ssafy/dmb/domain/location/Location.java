package com.ssafy.dmb.domain.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Location {

    @Id @GeneratedValue
    @Column(name = "location_id")
    private Long id;

    private String locationName;

    @Enumerated(EnumType.STRING)
    private LocationType locationType;

    private String locationAddress;

    private String locationLatitude;

    private String locationLongitude;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Region region;

}
