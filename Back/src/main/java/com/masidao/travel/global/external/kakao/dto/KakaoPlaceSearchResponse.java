package com.masidao.travel.global.external.kakao.dto;

import java.util.List;

public record KakaoPlaceSearchResponse(
        KakaoMeta meta,
        List<KakaoDocument> documents
) {

}
