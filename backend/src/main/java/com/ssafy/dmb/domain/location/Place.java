package com.ssafy.dmb.domain.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Place {

    @Id @GeneratedValue
    @Column(name = "place_id")
    private Long id;

    private int placeOrder;

}
