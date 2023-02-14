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
        private String bookmarkUrl;
        private String bookmarkCategory;

        public BookmarkDetail(Bookmark bookmark) {
            this.bookmarkId = bookmark.getId();
            this.planId = bookmark.getPlan().getId();
            this.bookmarkName = bookmark.getBookmarkName();
            this.bookmarkAddress = bookmark.getBookmarkAddress();
            this.bookmarkLatitude = bookmark.getBookmarkLatitude();
            this.bookmarkLongitude = bookmark.getBookmarkLongitude();
            this.bookmarkUrl = bookmark.getBookmarkUrl();
            this.bookmarkCategory = bookmark.getBookmarkCategory();
        }

    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class BookmarkResponse {
        private Long bookmarkId;
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;
        private String bookmarkUrl;
        private String bookmarkCategory;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class BookmarkRequest {
        private Long planId;
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;
        private String bookmarkUrl;
        private String bookmarkCategory;

    }
}
