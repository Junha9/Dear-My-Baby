package com.ssafy.dmb.controller;

import com.ssafy.dmb.domain.plan.Bookmark;
import com.ssafy.dmb.dto.BookmarkDto;
import com.ssafy.dmb.service.BookmarkService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/bookmark")
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

    @GetMapping("/{planId}")
    @ResponseBody
    public ResponseEntity<List<BookmarkDto.Detail>> getBookmarkList(@PathVariable("planId") Long planId) {
        return ResponseEntity.status(HttpStatus.OK).body(bookmarkService.getBookmarkList(planId));
    }

    @PostMapping("/new")
    @ResponseBody
    public ResponseEntity<BookmarkDto.Detail> saveBookmark(@RequestBody BookmarkDto.Request request) {

        return ResponseEntity.status(HttpStatus.OK).body(bookmarkService.create(request));
    }

    @DeleteMapping("/{bookmarkId}")
    @ResponseBody
    public void deleteBookmark(@PathVariable("bookmarkId") Long bookmarkId) {
        bookmarkService.delete(bookmarkId);
    }






}
