package com.masidao.travel.placeGroup.controller;

import com.masidao.travel.placeGroup.dto.PlaceGroupAddPlaceRequest;
import com.masidao.travel.placeGroup.dto.PlaceGroupDetailResponse;
import com.masidao.travel.placeGroup.dto.PlaceGroupResponse;
import com.masidao.travel.placeGroup.service.PlaceGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/api/place_groups/{place_groups_id}")
    public PlaceGroupDetailResponse getPlaceGroupDetails(@PathVariable("place_groups_id") Long placeGroupId) {
        return placeGroupService.getPlaceGroupDetails(placeGroupId);
    }

    @PostMapping("/api/place_groups/{place_groups_id}/places")
    public void addPlaceToPlaceGroup(@PathVariable("place_groups_id") Long placeGroupId, @RequestBody PlaceGroupAddPlaceRequest request) {
        placeGroupService.addPlaceToPlaceGroup(placeGroupId, request);
    }
}
