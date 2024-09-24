package com.masidao.travel.travelPlan.controller;

import com.masidao.travel.travelPlan.dto.TravelPlanAddRequest;
import com.masidao.travel.travelPlan.dto.TravelPlanAddResponse;
import com.masidao.travel.travelPlan.dto.TravelPlanResponse;
import com.masidao.travel.travelPlan.service.TravelPlanService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public ResponseEntity<List<TravelPlanResponse>> getAllTravelPlans(@RequestParam("member_id") Long memberId) {
        List<TravelPlanResponse> travelPlans = travelPlanService.getTravelPlans(memberId);
        return ResponseEntity.ok(travelPlans);
    }
}
