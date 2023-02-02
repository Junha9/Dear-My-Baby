package com.ssafy.dmb.service;

import com.ssafy.dmb.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class PlanService {

    private final Logger LOGGER = LoggerFactory.getLogger(RecordService.class);

    private final PlanRepository planRepository;
}
