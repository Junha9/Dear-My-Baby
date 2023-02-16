package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.user.Family;
import com.ssafy.dmb.dto.user.BabyDto;
import com.ssafy.dmb.repository.BabyRepository;
import com.ssafy.dmb.repository.FamilyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class BabyService {

    private final BabyRepository babyRepository;
    private final FamilyRepository familyRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(BabyService.class);

    public BabyDto.BabyResponse getBabyInfo(Long babyId) {
        LOGGER.info("[getBabyInfo] input babyId: {}", babyId);
        Baby baby = babyRepository.findById(babyId).get();
        BabyDto.BabyResponse babyInfo = new BabyDto.BabyResponse(baby);
        return babyInfo;
    }

    public BabyDto.BabyResponse createBabyInfo(BabyDto.BabyRequest request) {
        LOGGER.info("[createBabyInfo] input request : {}", request);
        Long familyId = request.getFamilyId();
        Family family = familyRepository.findById(familyId).get();

        Baby baby = Baby.builder()
                .family(family)
                .babyName(request.getBabyName())
                .babyAge(request.getBabyAge())
                .favoriteSpot(request.getFavoriteSpot())
                .favoriteFood(request.getFavoriteFood())
                .build();

        babyRepository.save(baby);
        BabyDto.BabyResponse babyInfo = new BabyDto.BabyResponse(baby);
        return babyInfo;
    }

    public void updateBabyInfo(BabyDto.BabyUpdateRequest request, Long babyId) {
        Baby baby = babyRepository.findById(babyId).get();

        baby.setFavoriteFood(request.getFavoriteFood());
        baby.setFavoriteSpot(request.getFavoriteSpot());
        babyRepository.save(baby);
    }
    public List<BabyDto.BabyResponse> getBabyList(Long familyId) {
        List<Baby> babies = babyRepository.findByFamily(familyId);

        List<BabyDto.BabyResponse> babyDtoList = babies.stream()
                .map(b -> new BabyDto.BabyResponse(b))
                .collect(Collectors.toList());
        return babyDtoList;
    }

    public void deleteBaby(Long babyId) {
        babyRepository.deleteById(babyId);
    }

}
