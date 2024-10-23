package com.masidao.travel.dailySchedule.dto;

import java.util.List;

public record DailyScheduleAddPlaceRequest(
        List<Long> placesIds
) {}
