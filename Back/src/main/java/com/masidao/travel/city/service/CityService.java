package com.masidao.travel.city.service;

import com.masidao.travel.city.dto.CityListResponse;
import com.masidao.travel.city.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;

    public List<CityListResponse> getCities() {
        return cityRepository.findAllProjectedBy()
                .stream()
                .map(cityProjection -> CityListResponse.builder()
                        .id(cityProjection.getId())
                        .name(cityProjection.getName())
                        .cityImage(cityProjection.getImageUrl())
                        .cityLatitude(cityProjection.getLatitude())
                        .cityLongitude(cityProjection.getLongitude())
                        .cityLevel(cityProjection.getLevel())
                        .build())
                .toList();
    }

    public List<CityListResponse> getCitiesByCityName(String cityName) {
        return cityRepository.findByNameContaining(cityName)
                .stream()
                .map(city -> CityListResponse.builder()
                        .id(city.getId())
                        .name(city.getName())
                        .cityImage(city.getImageUrl())
                        .cityLatitude(city.getLatitude())
                        .cityLongitude(city.getLongitude())
                        .cityLevel(city.getLevel())
                        .build())
                .toList();
    }
}
