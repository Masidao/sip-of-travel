package com.masidao.travel.travelPlan.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.time.LocalDate;

@Builder
public record TravelPlanAddRequest(
        @NotNull
        @JsonProperty("member_id")
        Long memberId,

        @NotNull
        @JsonProperty("city_id")
        Long cityId,

        @NotNull
        @FutureOrPresent
        @JsonProperty("start_date")
        LocalDate startDate,

        @NotNull
        @FutureOrPresent
        @JsonProperty("end_date")
        LocalDate endDate
) {
}
