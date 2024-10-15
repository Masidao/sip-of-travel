package com.masidao.travel.placeGroup.service;

import com.masidao.travel.place.dto.PlaceSearchResponse;
import com.masidao.travel.placeGroup.dto.PlaceGroupDetailResponse;
import com.masidao.travel.placeGroup.dto.PlaceGroupResponse;
import com.masidao.travel.placeGroup.entity.PlaceGroup;
import com.masidao.travel.placeGroup.entity.PlaceGroupPlace;
import com.masidao.travel.placeGroup.repository.PlaceGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceGroupService {

    private final PlaceGroupRepository placeGroupRepository;

    public List<PlaceGroupResponse> getPlaceGroupList(Long travelPlanId) {
        return placeGroupRepository.findAllByTravelPlanId(travelPlanId);
    }

    public PlaceGroupDetailResponse getPlaceGroupDetails(Long placeGroupId) {
        PlaceGroup placeGroup = placeGroupRepository.findById(placeGroupId)
                .orElseThrow(() -> new RuntimeException("PlaceGroup not found"));

        return new PlaceGroupDetailResponse(placeGroup.getName(),
                placeGroup.getPlaces().stream()
                        .map(PlaceGroupPlace::getPlace)
                        .map(place -> PlaceSearchResponse.builder()
                                .placeId(place.getId())
                                .placeName(place.getName())
                                .category(place.getCategory())
                                .build())
                        .toList());
    }
}
