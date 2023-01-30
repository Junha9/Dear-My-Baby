package com.ssafy.dmb.domain.record;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.plan.Day;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Record {
    @Id @GeneratedValue
    @Column(name = "record_id")
    private Long id;

    // day_id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id")
    private Day day;

    private int record_type;

    private String record_file;

    private String record_text;


    @OneToMany(mappedBy = "record", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    // 위도
    @Embedded
    private Coordinate recordCoordinate;
    // 경도




}
