package com.ssafy.dmb.domain.plan;

import com.ssafy.dmb.domain.location.LocationType;
import lombok.*;

import javax.persistence.*;

@Getter @Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Bookmark {

    @Id @GeneratedValue
    @Column(name = "bookmark_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    private String bookmarkName;

    private String bookmarkAddress;

    private String bookmarkLatitude;

    private String bookmarkLongitude;

    private LocationType bookmarkType;

}
