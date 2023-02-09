package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.plan.Bookmark;
import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.repository.BookmarkRepository;
import com.ssafy.dmb.repository.PlanRepository;
import com.ssafy.dmb.dto.Plan.BookmarkDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    private final Logger LOGGER = LoggerFactory.getLogger(BookmarkService.class);
    private final PlanRepository planRepository;


    @Transactional
    public BookmarkDto.Detail create(BookmarkDto.BookmarkRequest request){
        LOGGER.info("[createBookmark] input request : {}", request);
        Long planId = request.getPlanId();

        Plan plan = planRepository.findById(planId).
                orElseThrow(() -> new NoSuchElementException());


        Bookmark bookmark = Bookmark.builder().
                plan(plan).
                bookmarkName(request.getBookmarkName()).
                bookmarkAddress(request.getBookmarkAddress()).
                bookmarkLongitude(request.getBookmarkLongitude()).
                bookmarkLatitude(request.getBookmarkLatitude()).
                build();

        validateDuplicateBookmark(bookmark);
        Long id = bookmarkRepository.save(bookmark).getId();
        Bookmark findResult = bookmarkRepository.findById(id).get();
        BookmarkDto.Detail result = new BookmarkDto.Detail(findResult);
        return result;
//        return bookmark.getId();
    }

    private void validateDuplicateBookmark(Bookmark bookmark) {
        List<Bookmark> findBookmarks = bookmarkRepository.findByAddress(bookmark.getBookmarkAddress());
        if (!findBookmarks.isEmpty()) {
            throw new IllegalStateException("이미 등록한 장소입니다.");
        }
    }

    @Transactional
    public void delete(Long id) {
        bookmarkRepository.deleteById(id);
    }

    public List<Bookmark> findBookmarks(Long planId) {
        return bookmarkRepository.findByPlan(planId);
    }

    public List<BookmarkDto.Detail> getBookmarkList(Long planId) {
        LOGGER.info("[getBookmarkList] input planId : {}", planId);
        List<Bookmark> bookmarkList = bookmarkRepository.findByPlan(planId);

        List<BookmarkDto.Detail> planBookmarkDtoList = bookmarkList.stream()
                .map(r -> new BookmarkDto.Detail(r))
                .collect(Collectors.toList());
        return planBookmarkDtoList;

    }
}


