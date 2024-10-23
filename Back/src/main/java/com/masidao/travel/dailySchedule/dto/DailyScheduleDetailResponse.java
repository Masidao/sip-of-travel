package com.masidao.travel.dailySchedule.dto;

import lombok.Builder;

@Builder
public record DailyScheduleDetailResponse(
        Long id,
        Long placeId,
        Integer sequence
) {}
