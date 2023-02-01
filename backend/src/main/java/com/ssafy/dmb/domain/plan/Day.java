package com.ssafy.dmb.domain.plan;

import com.ssafy.dmb.domain.location.Place;
import com.ssafy.dmb.domain.record.Record;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Day {

    @Id @GeneratedValue
    @Column(name = "day_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @OneToMany(mappedBy = "day", cascade = CascadeType.PERSIST)
    private List<Place> places = new ArrayList<>();

    @OneToMany(mappedBy = "day", cascade = CascadeType.PERSIST)
    private List<Record> records = new ArrayList<>();

}
