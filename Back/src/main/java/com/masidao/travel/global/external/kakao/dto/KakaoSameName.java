package com.masidao.travel.global.external.kakao.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public record KakaoSameName(
        List<String> region,      // 질의어에서 인식된 지역의 리스트 "안양 맛집" -> "안양"

        String keyword,           // 질의어에서 지역 정보를 제외한 키워드 "안양 맛집" -> "맛집"

        @JsonProperty("selected_region")
        String selectedRegion     // 검인식된 지역 리스트 중, 현재 검색에 사용된 지역 정보
) {

}
