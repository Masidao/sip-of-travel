package com.masidao.travel.placeGroup.service;

import com.masidao.travel.placeGroup.dto.PlaceGroupResponse;
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
}
