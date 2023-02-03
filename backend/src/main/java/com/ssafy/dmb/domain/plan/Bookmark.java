package com.ssafy.dmb.domain.plan;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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


    @Builder
    public Bookmark (Plan plan, String bookmarkName, String bookmarkAddress,
                     String bookmarkLatitude, String bookmarkLongitude) {
        this.plan = plan;
        this.bookmarkName = bookmarkName;
        this.bookmarkAddress = bookmarkAddress;
        this.bookmarkLatitude = bookmarkLatitude;
        this.bookmarkLongitude = bookmarkLongitude;
    }

}
