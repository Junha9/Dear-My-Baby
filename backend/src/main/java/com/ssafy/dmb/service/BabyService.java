package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.BabyDto;

public interface BabyService {

    BabyDto.Response getBabyInfo(Long babyId);

}
