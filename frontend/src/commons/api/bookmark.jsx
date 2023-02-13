import { getApiInstance } from './http';
const api = getApiInstance();

// 북마크 저장
export async function apiCreateBookmark(bookmarkData) {
  //    const babyData = {
  //     familyId: 210,
  //     favoriteSpot: ['바다'],
  //     favoriteFood: ['밥', '한식'],
  //     babyName: '연두',
  //     babyAge: 5,
  //   };

  if (bookmarkData.planId != null) {
    const response = await api.post(`/bookmark/new`, bookmarkData);
    return response;
  }
  throw new Error('apiCreateBaby : babyData must be provided');
}

// 북마크 리스트 조회
export async function apiGetBookmarkList(planId) {
  if (planId != null) {
    const response = await api.get(`/bookmark/${planId}`);
    return response;
  }
  throw new Error('apiGetBabyList : familyId must be provided');
}

// 북마크 삭제
export async function apiDeleteBaby(bookmarkId) {
  if (bookmarkId != null) {
    const response = await api.delete(`/bookmark/${bookmarkId}`);
    return response;
  }
  throw new Error('apiDeleteBookmark : bookmarkId must be provided');
}
