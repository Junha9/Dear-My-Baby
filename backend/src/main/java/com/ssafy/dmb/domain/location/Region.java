package com.ssafy.dmb.domain.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Region {

    @Id @GeneratedValue
    @Column(name = "region_id")
    private Long id;

    private String regionName;

    @Embedded
    private Coordinate regionCoordinate;
}
