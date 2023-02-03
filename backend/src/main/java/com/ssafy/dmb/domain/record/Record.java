package com.ssafy.dmb.domain.record;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.plan.Day;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Record {
    @Id @GeneratedValue
    @Column(name = "record_id")
    private Long id;

    // day_id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id")
    private Day day;

    @Column(nullable = false)
    private int recordType;

    @Column(nullable = false)
    private String recordFile;

    private String recordText;

    private String fileUrl;

    @OneToMany(mappedBy = "record", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @Embedded
    private Coordinate recordCoordinate;

    @Column(columnDefinition = "DATETIME default now()")
    private LocalDateTime recordDate;

    @Builder
    public Record(String fileUrl, String recordFile, String recordText, int recordType, Day day, Coordinate recordCoordinate) {
        this.fileUrl = fileUrl;
        this.recordFile = recordFile;
        this.recordText = recordText;
        this.recordType = recordType;
        this.day = day;
        this.recordCoordinate = recordCoordinate;
    }

}
