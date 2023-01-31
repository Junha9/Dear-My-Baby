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
    private Long id;

    @OneToMany(mappedBy = "family", cascade = CascadeType.ALL)
    private List<FamilyUser> FamilyUser = new ArrayList<>();

    @OneToMany(mappedBy = "family", cascade = CascadeType.ALL)
    private List<Plan> plans = new ArrayList<>();
}
