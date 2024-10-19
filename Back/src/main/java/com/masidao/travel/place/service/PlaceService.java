package com.masidao.travel.place.service;

import com.masidao.travel.global.external.kakao.Service.KakaoMapService;
import com.masidao.travel.global.external.kakao.dto.KakaoPlaceSearchResponse;
import com.masidao.travel.place.dto.PlaceSearchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final KakaoMapService kakaoMapService;

    public List<PlaceSearchResponse> searchPlaces(String keyword, Integer page, Integer size) {
        KakaoPlaceSearchResponse kakaoPlaceSearchResponse = kakaoMapService.searchPlaces(keyword,
                page == null ? KakaoMapService.DEFAULT_PAGE : page,
                size == null ? KakaoMapService.DEFAULT_SIZE : size);

        List<PlaceSearchResponse> response = kakaoPlaceSearchResponse.documents().stream()
                .map(document -> PlaceSearchResponse.builder()
                        .placeId(Long.valueOf(document.id()))
                        .placeName(document.placeName())
                        .category(document.categoryGroupName())
                        .build())
                .toList();

        return response;
    }
}
