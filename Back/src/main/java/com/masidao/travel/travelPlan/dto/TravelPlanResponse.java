package com.masidao.travel.travelPlan.dto;

import lombok.Builder;

import java.time.LocalDate;

@Builder
public record TravelPlanResponse(
        Long id,
        Long cityId,
        LocalDate startDate,
        LocalDate endDate
){
}
