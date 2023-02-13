package com.ssafy.dmb.dto.Plan;

import com.ssafy.dmb.domain.plan.Bookmark;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class BookmarkDto {
    @Getter
    @Builder
    @AllArgsConstructor
    public static class BookmarkDetail {

        private Long bookmarkId;
        private Long planId;
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;

        public BookmarkDetail(Bookmark bookmark) {
            this.bookmarkId = bookmark.getId();
            this.planId = bookmark.getPlan().getId();
            this.bookmarkName = bookmark.getBookmarkName();
            this.bookmarkAddress = bookmark.getBookmarkAddress();
            this.bookmarkLatitude = bookmark.getBookmarkLatitude();
            this.bookmarkLongitude = bookmark.getBookmarkLongitude();
        }

    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class BookmarkResponse {
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class BookmarkRequest {
//        private Long id;
        private Long planId;
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;

    }
}
