package com.ssafy.dmb.domain.plan;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Checklist {

    @Id @GeneratedValue
    @Column(name = "checklist_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    private String item;

    @Builder
    public Checklist(Long id, Plan plan, String item) {
        this.id = id;
        this.plan = plan;
        this.item = item;
    }
}
