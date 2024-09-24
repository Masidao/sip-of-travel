package com.masidao.travel.travelPlan.controller;

import com.masidao.travel.travelPlan.dto.TravelPlanAddRequest;
import com.masidao.travel.travelPlan.dto.TravelPlanAddResponse;
import com.masidao.travel.travelPlan.service.TravelPlanService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/travel_plans")
@RequiredArgsConstructor
public class TravelPlanController {

    private final TravelPlanService travelPlanService;

    @PostMapping
    public ResponseEntity<TravelPlanAddResponse> addTravelPlan(@Valid @RequestBody TravelPlanAddRequest request) {
        TravelPlanAddResponse response = travelPlanService.addTravelPlan(request);
        return ResponseEntity.status(201).body(response);
    }
}
