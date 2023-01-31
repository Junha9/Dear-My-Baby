package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.plan.Bookmark;
import com.ssafy.dmb.dto.BookmarkDto;
import com.ssafy.dmb.repository.BookmarkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;


    @Transactional
    public BookmarkDto.Detail create(BookmarkDto.Request request){
        Bookmark bookmark = request.toEntity();
        validateDuplicateBookmark(bookmark);
        Long id = bookmarkRepository.save(bookmark).getId();
        Bookmark findResult = bookmarkRepository.findOne(id);
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
        bookmarkRepository.remove(id);
    }

    public List<Bookmark> findBookmarks(Long planId) {
        return bookmarkRepository.findByPlan(planId);
    }

}


