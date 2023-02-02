package com.ssafy.dmb.domain;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.plan.Plan;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Family {

    @Id @GeneratedValue
    @Column(name = "family_id")
    private Long id;

    @Column(nullable = false)
    private String familyName;

    @OneToMany(mappedBy = "family", cascade = CascadeType.ALL)
    private List<FamilyUser> FamilyUser = new ArrayList<>();

    @OneToMany(mappedBy = "family", cascade = CascadeType.PERSIST)
    private List<Plan> plans = new ArrayList<>();

    @OneToMany(mappedBy = "family", cascade = CascadeType.ALL)
    private List<Baby> babies = new ArrayList<>();
}
