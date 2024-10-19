package com.masidao.travel.placeGroup.service;

import com.masidao.travel.place.dto.PlaceSearchResponse;
import com.masidao.travel.place.entity.Place;
import com.masidao.travel.place.repository.PlaceRepository;
import com.masidao.travel.placeGroup.dto.PlaceGroupDeletePlaceRequest;
import com.masidao.travel.placeGroup.dto.PlaceGroupDetailResponse;
import com.masidao.travel.placeGroup.dto.PlaceGroupResponse;
import com.masidao.travel.placeGroup.entity.PlaceGroup;
import com.masidao.travel.placeGroup.entity.PlaceGroupPlace;
import com.masidao.travel.placeGroup.repository.PlaceGroupPlaceRepository;
import com.masidao.travel.placeGroup.repository.PlaceGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceGroupService {

    private final PlaceGroupRepository placeGroupRepository;
    private final PlaceRepository placeRepository;
    private final PlaceGroupPlaceRepository  placeGroupPlaceRepository;

    public List<PlaceGroupResponse> getPlaceGroupList(Long travelPlanId) {
        return placeGroupRepository.findAllByTravelPlanId(travelPlanId);
    }

    public PlaceGroupDetailResponse getPlaceGroupDetails(Long placeGroupId) {
        PlaceGroup placeGroup = placeGroupRepository.findPlaceGroupWithPlacesById(placeGroupId);

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


    @Transactional
    public void addPlaceToPlaceGroup(Long placeGroupId, PlaceGroupDeletePlaceRequest request) {
        PlaceGroup placeGroup = placeGroupRepository.findById(placeGroupId)
                .orElseThrow(() -> new RuntimeException("장소그룹이 없습니다."));

        List<Place> places = placeRepository.findAllById(request.placeId());

        // TODO: 중복처리, 삽입 쿼리 압축
        for (Place place : places) {
            PlaceGroupPlace placeGroupPlace = PlaceGroupPlace.builder()
                    .placeGroup(placeGroup)
                    .place(place)
                    .build();
            placeGroupPlaceRepository.save(placeGroupPlace);
        }
    }

    public void removePlaceFromPlaceGroup(Long placeGroupId, PlaceGroupDeletePlaceRequest request) {
        PlaceGroup placeGroup = placeGroupRepository.findById(placeGroupId)
                .orElseThrow(() -> new RuntimeException("장소그룹이 없습니다."));

        List<PlaceGroupPlace> placesToRemove = placeGroupPlaceRepository.findByPlaceGroupAndPlaceIds(placeGroup, request.placeId());

        placeGroupPlaceRepository.deleteAll(placesToRemove);
    }
}
