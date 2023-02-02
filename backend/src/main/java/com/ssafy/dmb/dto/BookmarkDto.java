package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.location.LocationType;
import com.ssafy.dmb.domain.plan.Bookmark;
import com.ssafy.dmb.domain.plan.Plan;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class BookmarkDto {
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Detail {
        private Long planId;
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;
        private LocationType bookmarkType;

        public Detail(Bookmark bookmark) {
            this.planId = bookmark.getPlan().getId();
            this.bookmarkName = bookmark.getBookmarkName();
            this.bookmarkAddress = bookmark.getBookmarkAddress();
            this.bookmarkLatitude = bookmark.getBookmarkLatitude();
            this.bookmarkLongitude = bookmark.getBookmarkLongitude();
            this.bookmarkType = bookmark.getBookmarkType();
        }

    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response {
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;
        private LocationType bookmarkType;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Request {
//        private Long id;
        private Long planId;
        private String bookmarkName;
        private String bookmarkAddress;
        private String bookmarkLatitude;
        private String bookmarkLongitude;
        private LocationType bookmarkType;

    }
}
