package com.masidao.travel.dailySchedule.dto;

import lombok.Builder;
import java.util.List;

@Builder
public record DailyScheduleResponse(
        Long id,
        List<DailyScheduleDetailResponse> places
) {}
