package com.ssafy.dmb.domain.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "region")
    private List<Location> locations = new ArrayList<>();

}
