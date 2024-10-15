package com.masidao.travel.global.exception;

import org.springframework.http.HttpStatus;

public class CustomException extends RuntimeException{

    private final ExceptionCode exceptionCode;

    public CustomException(ExceptionCode exceptionCode) {
        this.exceptionCode = exceptionCode;
    }

    public HttpStatus getStatus() {
        return exceptionCode.getStatus();
    }

    public int getErrorCode() {
        return exceptionCode.getErrorCode();
    }

    public String getMessage() {
        return exceptionCode.getMessage();
    }
}
