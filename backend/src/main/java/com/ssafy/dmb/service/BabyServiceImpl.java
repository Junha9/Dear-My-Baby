package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.Family;
import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.dto.BabyDto;
import com.ssafy.dmb.repository.BabyRepository;
import com.ssafy.dmb.repository.FamilyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class BabyServiceImpl implements BabyService{

    private final BabyRepository babyRepository;
    private final FamilyRepository familyRepository;

    private final Logger LOGGER = LoggerFactory.getLogger(BabyServiceImpl.class);

    public BabyDto.Response getBabyInfo(Long babyId) {
        LOGGER.info("[getBabyInfo] input babyId: {}", babyId);
        Baby baby = babyRepository.findById(babyId).get();
        BabyDto.Response babyInfo = new BabyDto.Response(baby);
        return babyInfo;
    }

    public BabyDto.Response createBabyInfo(BabyDto.BabyRequest request) {
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
        BabyDto.Response babyInfo = new BabyDto.Response(baby);
        return babyInfo;


    }

    public BabyDto.Response updateBabyInfo(BabyDto.BabyRequest request, Long babyId) {
        Long familyId = request.getFamilyId();
        Family family = familyRepository.findById(familyId).get();

        Baby baby = Baby.builder()
                .family(family)
                .babyName(request.getBabyName())
                .babyAge(request.getBabyAge())
                .favoriteSpot(request.getFavoriteSpot())
                .favoriteFood(request.getFavoriteFood())
                .build();

        baby.setId(babyId);
        babyRepository.save(baby);
        BabyDto.Response babyInfo = new BabyDto.Response(baby);
        return babyInfo;


    }

    public List<BabyDto.Response> getBabyList(Long familyId) {
        List<Baby> babies = babyRepository.findByFamily(familyId);

        List<BabyDto.Response> babyDtoList = babies.stream()
                .map(b -> new BabyDto.Response(b))
                .collect(Collectors.toList());
        return babyDtoList;
    }

    public void deleteBaby(Long babyId) {
        babyRepository.deleteById(babyId);
    }
}
