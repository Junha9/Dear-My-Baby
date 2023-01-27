package com.ssafy.dmb.domain.plan;

import com.ssafy.dmb.domain.Family;
import com.ssafy.dmb.domain.plan.Bookmark;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
public class Plan {
    @Id @GeneratedValue
    @Column(name = "plan_id")
    private Long id;

    private String planDestination;

    private LocalDate planDate;

    private int planPeriod;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "family_id")
    private Family family;

    @OneToMany(mappedBy = "plan", cascade = CascadeType.ALL)
    private List<Bookmark> bookmarks = new ArrayList<>();




}
