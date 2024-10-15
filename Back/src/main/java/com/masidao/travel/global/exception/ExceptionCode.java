package com.masidao.travel.global.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ExceptionCode {

    // TravelPlan
    INVALID_DATE_RANGE(HttpStatus.BAD_REQUEST, 4001, "시작 날짜가 종료 날짜보다 이를 수 없습니다.");


    private final HttpStatus status;
    private final int errorCode;
    private final String message;
}
