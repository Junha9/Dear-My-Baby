package com.ssafy.dmb.domain.location;

import com.ssafy.dmb.domain.plan.Bookmark;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Location {

    @Id @GeneratedValue
    @Column(name = "location_id")
    private Long id;

    private String locationName;

    @Enumerated(EnumType.ORDINAL)
    private LocationType locationType;

    private String locationAddress;

    @Embedded
    private Coordinate locationCoordinate;

    @ManyToOne(fetch = FetchType.LAZY)
    private Region region;


    @OneToMany(mappedBy = "location", cascade = CascadeType.ALL)
    private List<Bookmark> bookmarks = new ArrayList<>();

    @OneToMany(mappedBy = "location", cascade = CascadeType.ALL)
    private List<Place> places = new ArrayList<>();
}
