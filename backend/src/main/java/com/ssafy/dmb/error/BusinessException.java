package com.ssafy.dmb.error;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException {
    private ErrorCode errorCode;
    private String message;

    public BusinessException(ErrorCode errorCode, String message) {
//        super(message);
        this.message = message;
        this.errorCode = errorCode;
    }
}
