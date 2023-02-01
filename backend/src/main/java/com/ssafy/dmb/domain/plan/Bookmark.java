package com.ssafy.dmb.domain.plan;

import com.ssafy.dmb.domain.location.LocationType;
import lombok.*;

import javax.persistence.*;

@Getter @Setter
@Entity
@NoArgsConstructor
public class Bookmark {

    @Id @GeneratedValue
    @Column(name = "bookmark_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    private String bookmarkName;

    private String bookmarkAddress;

    private String bookmarkLatitude;

    private String bookmarkLongitude;

    private LocationType bookmarkType;

    @Builder
    public Bookmark (Plan plan, String bookmarkName, String bookmarkAddress,
                     String bookmarkLatitude, String bookmarkLongitude, LocationType bookmarkType) {
        this.plan = plan;
        this.bookmarkName = bookmarkName;
        this.bookmarkAddress = bookmarkAddress;
        this.bookmarkLatitude = bookmarkLatitude;
        this.bookmarkLongitude = bookmarkLongitude;
        this.bookmarkType = bookmarkType;
    }

}
