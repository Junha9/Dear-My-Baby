package com.ssafy.dmb.domain.plan;

import com.ssafy.dmb.domain.Family;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Plan {
    @Id @GeneratedValue
    @Column(name = "plan_id")
    private Long id;

    @Column(nullable = false)
    private String planDestination;

    @Column(nullable = false)
    private LocalDate startDate;

    @Column(nullable = false)
    private LocalDate endDate;

    @Column(nullable = false)
    private int planPeriod;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "family_id")
    private Family family;


    @OneToMany(mappedBy = "plan")
    private List<Bookmark> bookmarks = new ArrayList<>();

    @OneToMany(mappedBy = "plan", cascade = CascadeType.PERSIST)
    private List<Day> days = new ArrayList<>();

    @Builder
    public Plan(String planDestination, LocalDate startDate, LocalDate endDate, int planPeriod, Family family){
        this.planDestination = planDestination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.planPeriod = planPeriod;
        this.family = family;
    }

}
