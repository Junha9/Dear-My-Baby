package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.plan.Bookmark;
import com.ssafy.dmb.repository.BookmarkRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class BookmarkServiceTest {

    @Autowired BookmarkService bookmarkService;
    @Autowired BookmarkRepository bookmarkRepository;

    @Test
    @Rollback(false)
    public void 북마크등록() throws Exception {
        Bookmark bookmark = new Bookmark();
        bookmark.setBookmarkAddress("Holly molly");

        Long saveId = bookmarkService.create(bookmark);

        assertEquals(bookmark, bookmarkRepository.findOne(saveId));
    }

    @Test
    public void 중복주소() throws Exception {
        //Given
        Bookmark bookmark1 = new Bookmark();
        bookmark1.setBookmarkAddress("what");

        Bookmark bookmark2 = new Bookmark();
        bookmark2.setBookmarkAddress("what");

        //when
        bookmarkService.create(bookmark1);
        IllegalStateException thrown = assertThrows(IllegalStateException.class, () -> bookmarkService.create(bookmark2));
        assertEquals("이미 등록한 장소입니다.", thrown.getMessage());


    }
}