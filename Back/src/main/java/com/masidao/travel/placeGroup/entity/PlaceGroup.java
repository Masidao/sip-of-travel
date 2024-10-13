package com.masidao.travel.placeGroup.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "place_groups")
public class PlaceGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "travel_plan_id")
    private Long travelPlanId;

    @NotNull
    @Column(length = 50)
    private String name;

    @NotNull
    private Long amount;
}
    
    