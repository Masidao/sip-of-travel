package com.masidao.travel.dailySchedule.controller;

import com.masidao.travel.dailySchedule.dto.DailyScheduleAddPlaceRequest;
import com.masidao.travel.dailySchedule.dto.DailyScheduleResponse;
import com.masidao.travel.dailySchedule.service.DailyScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/schedules")
@RequiredArgsConstructor
public class DailyScheduleController {

    private final DailyScheduleService dailyScheduleService;

    @PostMapping("/{daily_schedule_id}/places")
    public ResponseEntity<DailyScheduleResponse> addPlacesToSchedule(
            @PathVariable("daily_schedule_id") Long dailyScheduleId,
            @RequestBody DailyScheduleAddPlaceRequest request) {

        DailyScheduleResponse response = dailyScheduleService.addPlacesToSchedule(dailyScheduleId, request);
        return ResponseEntity.ok(response);
    }
}
