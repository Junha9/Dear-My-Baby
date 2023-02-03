package com.ssafy.dmb.domain.plan;

import com.ssafy.dmb.domain.location.Place;
import com.ssafy.dmb.domain.record.Record;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Day {

    @Id @GeneratedValue
    @Column(name = "day_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    private int dayNumber;

    @OneToMany(mappedBy = "day")
    private List<Place> places = new ArrayList<>();

    @OneToMany(mappedBy = "day", cascade = CascadeType.ALL)
    private List<Record> records = new ArrayList<>();

    @Builder
    public Day(int dayNumber, Plan plan) {
        this.dayNumber = dayNumber;
        this.plan = plan;
    }

}

