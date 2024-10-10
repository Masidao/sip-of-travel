package com.masidao.travel.city.service;

import com.masidao.travel.city.dto.CityListResponse;
import com.masidao.travel.city.entity.City;
import com.masidao.travel.city.entity.CityDocument;
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
                        .build())
                .toList();
    }
}
