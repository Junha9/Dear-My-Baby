package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.user.BabyDto;

public interface BabyService {

    BabyDto.Response getBabyInfo(Long babyId);

}
