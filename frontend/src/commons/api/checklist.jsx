import { getApiInstance } from './http';
const api = getApiInstance();

// 댓글 저장
export async function apiCreateCheckList(checkListData) {
  //    const babyData = {
  //     familyId: 210,
  //     favoriteSpot: ['바다'],
  //     favoriteFood: ['밥', '한식'],
  //     babyName: '연두',
  //     babyAge: 5,
  //   };

  if (checkListData.planId != null) {
    const response = await api.post(`/checklist`, checkListData);
    return response;
  }
  throw new Error('apiCreateCheckList : checkListData must be provided');
}

// 댓글 조회
export async function apiGetCheckList(planId) {
  if (planId != null) {
    const response = await api.get(`/checklist/items/${planId}`);
    return response;
  }
  throw new Error('apiGetCheckList : planId must be provided');
}

// 댓글 삭제
export async function apiDeleteCheckList(checkListId) {
  if (checkListId != null) {
    const response = await api.delete(`/checklist/${checkListId}`);
    return response;
  }
  throw new Error('apiDeleteCheckList : checkListId be provided');
}
