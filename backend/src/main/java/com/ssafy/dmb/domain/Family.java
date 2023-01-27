package com.ssafy.dmb.domain;

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
    private Long no;

    @OneToMany(mappedBy = "family")
    private List<FamilyUser> FamilyUser = new ArrayList<>();

    @OneToMany(mappedBy = "family")
    private List<Plan> plans = new ArrayList<>();
}
