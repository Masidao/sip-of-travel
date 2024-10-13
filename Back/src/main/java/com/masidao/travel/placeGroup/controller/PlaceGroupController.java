package com.masidao.travel.placeGroup.controller;

import com.masidao.travel.placeGroup.dto.PlaceGroupResponse;
import com.masidao.travel.placeGroup.service.PlaceGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
@RequestMapping()
@RequiredArgsConstructor
public class PlaceGroupController {

    private final PlaceGroupService placeGroupService;

    @GetMapping("/api/travel_plans/{travel_plan_id}/place_groups")
    public List<PlaceGroupResponse> getPlaceGroupList(@PathVariable("travel_plan_id") Long travelPlanId) {
        return placeGroupService.getPlaceGroupList(travelPlanId);
    }
}
