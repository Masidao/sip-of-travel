package com.masidao.travel.city.dto;

import lombok.Builder;

@Builder
public record CityListResponse (
        Long id,
        String name,
        String cityImage,
        Double cityLatitude,
        Double cityLongitude,
        Long cityLevel
){

}
