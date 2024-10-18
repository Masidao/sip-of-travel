package com.masidao.travel.global.external.kakao.Service;

import com.masidao.travel.global.external.kakao.dto.KakaoPlaceSearchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
public class KakaoMapService {

    public static final int DEFAULT_PAGE = 1;
    public static final int DEFAULT_SIZE = 15;

    private final RestClient restClient;

    @Value(value = "${kakao.api.key}")
    private String KAKAO_API_KEY;

    @Value(value = "${kakao.api.url.search-place}")
    private String KAKAO_MAP_API_SERACH_PLACE_URL;

    public KakaoMapService() {
        this.restClient = RestClient.create();
    }

    public KakaoPlaceSearchResponse searchPlaces(String keyword) {
        String url = UriComponentsBuilder.fromHttpUrl(KAKAO_MAP_API_SERACH_PLACE_URL)
                .queryParam("query", keyword)
                .queryParam("page", DEFAULT_PAGE)
                .queryParam("size", DEFAULT_SIZE)
                .build()
                .toString();

        KakaoPlaceSearchResponse response = restClient.get()
                .uri(url)
                .headers(headers -> headers.add("Authorization", "KakaoAK " + KAKAO_API_KEY))
                .retrieve()
                .body(KakaoPlaceSearchResponse.class);

        return response;
    }
}
