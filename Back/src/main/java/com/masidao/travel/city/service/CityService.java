package com.masidao.travel.city.service;

import com.masidao.travel.city.dto.CityListResponse;
import com.masidao.travel.city.entity.City;
import com.masidao.travel.city.entity.CityDocument;
import com.masidao.travel.city.repository.CityDocumentRepository;
import com.masidao.travel.city.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;
    private final CityDocumentRepository cityDocumentRepository;

    public List<CityListResponse> getCities() {
        return cityRepository.findAllProjectedBy()
                .stream()
                .map(cityProjection -> CityListResponse.builder()
                        .id(cityProjection.getId())
                        .name(cityProjection.getName())
                        .build())
                .toList();
    }


    public void indexCitiesToElasticsearch() {
        // MySQL에서 데이터 읽기
        List<City> cities = cityRepository.findAll();

        // Elasticsearch에 저장할 데이터로 변환
        List<CityDocument> cityDocuments = cities.stream()
                .map(city -> CityDocument.builder()
                        .id(city.getId())
                        .name(city.getName())
                        .latitude(city.getLatitude())
                        .longitude(city.getLongitude())
                        .build())
                .collect(Collectors.toList());

        // Elasticsearch로 인덱싱
        cityDocumentRepository.saveAll(cityDocuments);
    }
}
