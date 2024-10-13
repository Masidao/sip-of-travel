package com.masidao.travel.global.external.kakao.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public record KakaoSameName(
        List<String> region,      // 지역 리스트

        String keyword,           // 지역 정보를 제외한 키워드

        @JsonProperty("selected_region")
        String selectedRegion     // 검색에 사용된 지역 정보
) {

}
