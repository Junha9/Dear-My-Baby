import { getApiInstance } from './http';
const api = getApiInstance();

// 아이 정보 등록
export async function apiCreateBaby(babyData) {
  //    const babyData = {
  //     familyId: 210,
  //     favoriteSpot: ['바다'],
  //     favoriteFood: ['밥', '한식'],
  //     babyName: '연두',
  //     babyAge: 5,
  //   };

  if (babyData.familyId != null) {
    const response = await api.post(`/baby/new`, babyData);
    return response;
  }
  throw new Error('apiCreateBaby : babyData must be provided');
}

// 아이 리스트 조회
export async function apiGetBabyList(familyId) {
  if (familyId != null) {
    const response = await api.get(`/baby/family/${familyId}`);
    return response;
  }
  throw new Error('apiGetBabyList : familyId must be provided');
}

// 아이 1명 정보 조회
export async function apiGetBaby(babyId) {
  if (babyId != null) {
    const response = await api.get(`/baby/${babyId}`);
    return response;
  }
  throw new Error('apiGetBaby : babyId must be provided');
}

// 아이 정보 수정
export async function apiUpdateBaby(babyData, babyId) {
  //   const babyData = {
  //     familyId: 210,
  //     favoriteSpot: ['바다', '산'],
  //     favoriteFood: ['밥', '한식'],
  //     babyName: '도현',
  //     babyAge: 5,
  //   };
  if (babyId != null) {
    const response = await api.put(`/baby/${babyId}`, babyData);
    return response;
  }
  throw new Error('apiUpdateBaby : babyId and babyData must be provided');
}

// 아이 정보 삭제
export async function apiDeleteBaby(babyId) {
  if (babyId != null) {
    const response = await api.delete(`/baby/${babyId}`);
    return response;
  }
  throw new Error('apiDeleteBaby : babyId must be provided');
}
