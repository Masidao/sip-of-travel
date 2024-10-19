package com.masidao.travel.global.external.kakao.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record KakaoDocument(
        String id,

        @JsonProperty("place_name")
        String placeName,

        @JsonProperty("category_name")
        String categoryName,

        @JsonProperty("category_group_code")
        String categoryGroupCode,

        @JsonProperty("category_group_name")
        String categoryGroupName,

        String phone,

        @JsonProperty("address_name")
        String addressName,

        @JsonProperty("road_address_name")
        String roadAddressName,

        String x,

        String y,

        @JsonProperty("place_url")
        String placeUrl,

        String distance
) {

}
