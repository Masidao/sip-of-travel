package com.masidao.travel.placeGroup.dto;

import java.util.List;

public record PlaceGroupDeletePlaceRequest(
        List<Long> placeId
) {
}