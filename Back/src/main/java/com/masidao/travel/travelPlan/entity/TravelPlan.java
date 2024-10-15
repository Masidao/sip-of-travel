package com.masidao.travel.travelPlan.entity;

import jakarta.persistence.*;
import lombok.*;


import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "travel_plans")
public class TravelPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long memberId;

    private Long cityId;

    private LocalDate startDate;

    private LocalDate endDate;
}
