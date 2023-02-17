package com.ssafy.dmb.controller;

import com.ssafy.dmb.domain.plan.Bookmark;
import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.dto.Plan.BookmarkDto;
import com.ssafy.dmb.repository.BookmarkRepository;
import com.ssafy.dmb.service.BookmarkService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookmark")
@Tag(name = "Bookmark", description = "bookmark API 입니다.")
@RequiredArgsConstructor
public class BookmarkController {

    private final BookmarkService bookmarkService;

    private final BookmarkRepository bookmarkRepository;

    @Operation(summary = "북마크 리스트 조회", description = "<strong> planId </strong>를 통해 북마크 리스트를 조회 한다.")
    @GetMapping("/{planId}")
    public ResponseEntity<List<BookmarkDto.BookmarkDetail>> getBookmarkList(@PathVariable("planId") Long planId) {

        return ResponseEntity.status(HttpStatus.OK).body(bookmarkService.getBookmarkList(planId));

    }

    @Operation(summary = "북마크 저장", description = "북마크 정보 저장 한다.")
    @PostMapping("/new")
    public ResponseEntity<List<BookmarkDto.BookmarkDetail>> saveBookmark(@RequestBody BookmarkDto.BookmarkRequest request) {

        bookmarkService.create(request);

        return ResponseEntity.status(HttpStatus.OK).body(bookmarkService.getBookmarkList(request.getPlanId()));

    }

    @Operation(summary = "북마크 리스트 삭제", description = "<strong> bookmarkId </strong>를 통해 북마크를 삭제 한다.")
    @DeleteMapping("/{bookmarkId}")
    public ResponseEntity<List<BookmarkDto.BookmarkDetail>> deleteBookmark(@PathVariable("bookmarkId") Long bookmarkId) {
        Bookmark bookmark = bookmarkRepository.findById(bookmarkId).get();
        Plan plan = bookmark.getPlan();
        bookmarkService.delete(bookmarkId);

        return ResponseEntity.status(HttpStatus.OK).body(bookmarkService.getBookmarkList(plan.getId()));
    }






}
