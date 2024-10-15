package com.masidao.travel.travelPlan.exception;

import com.masidao.travel.global.exception.CustomException;
import com.masidao.travel.global.exception.ExceptionCode;

public class InvalidDateRangeException extends CustomException {
    public InvalidDateRangeException() {
        super(ExceptionCode.INVALID_DATE_RANGE);
    }
}
