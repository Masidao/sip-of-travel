package com.masidao.travel.placeGroup.dto;

import java.util.List;

public record PlaceGroupAddPlaceRequest(
        List<Long> placeId
) {
}
