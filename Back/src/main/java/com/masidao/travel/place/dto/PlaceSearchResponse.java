package com.masidao.travel.place.dto;

import lombok.Builder;

@Builder
public record PlaceSearchResponse(
    Long placeId,
    String placeName,
    String category
) {
}
