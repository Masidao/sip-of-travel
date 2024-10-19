package com.masidao.travel.global.external.kakao.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record KakaoMeta(

        @JsonProperty("total_count")
        Integer totalCount, // 해당 키워드로 검색한 결과로 나온 장소의 총 개수

        @JsonProperty("pageable_count")
        Integer pageableCount,  // 출력 가능한 장소의 총 개수. (중복제거 등의 이유로 줄어든 데이터)

        @JsonProperty("is_end")
        Boolean isEnd,            // 현재 페이지가 마지막 페이지인지 여부

        @JsonProperty("same_name")
        KakaoSameName sameName    // 질의어의 지역 및 키워드 분석 정보
) {
        @Override
        public String toString() {
                return "KakaoMeta{" +
                        "totalCount=" + totalCount +
                        ", pageableCount=" + pageableCount +
                        ", isEnd=" + isEnd +
                        ", sameName=" + sameName +
                        '}';
        }
}
