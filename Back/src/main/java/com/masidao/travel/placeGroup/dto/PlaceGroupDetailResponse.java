package com.masidao.travel.placeGroup.dto;

import com.masidao.travel.place.dto.PlaceSearchResponse;
import lombok.Builder;

import java.util.List;

@Builder
public record PlaceGroupDetailResponse(
        String name,
        List<PlaceSearchResponse> places
) {
}
