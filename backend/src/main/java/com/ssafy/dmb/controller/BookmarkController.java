package com.ssafy.dmb.controller;
import io.swagger.annotations.ApiOperation;
import com.ssafy.dmb.dto.BookmarkDto;
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

//    @GetMapping("/bookmarks/{planId}")
//    @ResponseBody
//    public ResponseEntity<List<BookmarkDto.Detail>> getBookmarks(@PathVariable("planId")Long planId) {
//        List<Bookmark> findBookmarks = bookmarkService.findBookmarks(planId);
//        List<BookmarkDto.Detail> collect = findBookmarks.stream()
//                .map(m-> new BookmarkDto.Detail(m))
//                .collect(Collectors.toList());
//        return ResponseEntity.status(HttpStatus.OK).body(collect);
//    }
    @Operation(summary = "북마크 리스트 조회", description = "<strong> planId </strong>를 통해 북마크 리스트를 조회 한다.")
    @GetMapping("/{planId}")
    public ResponseEntity<List<BookmarkDto.Detail>> getBookmarkList(@PathVariable("planId") Long planId) {
        return ResponseEntity.status(HttpStatus.OK).body(bookmarkService.getBookmarkList(planId));
    }

    @Operation(summary = "북마크 저장", description = "북마크 정보 저장 한다.")
    @PostMapping("/new")
    public ResponseEntity<BookmarkDto.Detail> saveBookmark(@RequestBody BookmarkDto.BookmarkRequest request) {

        return ResponseEntity.status(HttpStatus.OK).body(bookmarkService.create(request));
    }

    @Operation(summary = "북마크 리스트 삭제", description = "<strong> bookmarkId </strong>를 통해 북마크를 삭제 한다.")
    @DeleteMapping("/{bookmarkId}")
    public void deleteBookmark(@PathVariable("bookmarkId") Long bookmarkId) {
        bookmarkService.delete(bookmarkId);
    }






}
