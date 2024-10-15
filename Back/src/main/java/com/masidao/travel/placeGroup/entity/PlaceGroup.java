package com.masidao.travel.placeGroup.entity;

import com.masidao.travel.travelPlan.entity.TravelPlan;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "place_groups")
public class PlaceGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "travel_plan_id", nullable = false)
    private TravelPlan travelPlan;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(nullable = false)
    private Long amount = 0L;

    @OneToMany(mappedBy = "placeGroup", cascade = CascadeType.ALL)
    private List<PlaceGroupPlace> places = new ArrayList<>();
}
    
    