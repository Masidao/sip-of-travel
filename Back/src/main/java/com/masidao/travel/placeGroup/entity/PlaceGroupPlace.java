package com.masidao.travel.placeGroup.entity;

import com.masidao.travel.place.entity.Place;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "place_groups_places")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlaceGroupPlace {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id", nullable = false)
    private PlaceGroup placeGroup;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id", nullable = false)
    private Place place;

}

