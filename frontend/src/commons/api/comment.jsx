import { getApiInstance } from './http';
const api = getApiInstance();

// 댓글 저장
export async function apiCreateComment(commentData) {
  //    const babyData = {
  //     familyId: 210,
  //     favoriteSpot: ['바다'],
  //     favoriteFood: ['밥', '한식'],
  //     babyName: '연두',
  //     babyAge: 5,
  //   };

  if (commentData.recordId != null) {
    const response = await api.post(`/comment`, commentData);
    return response;
  }
  throw new Error('apiCreateComment : commentData must be provided');
}

// 댓글 조회
export async function apiGetCommentList(recordId) {
  if (recordId != null) {
    const response = await api.get(`/comment/comments/${recordId}`);
    return response;
  }
  throw new Error('apiGetCommentList : recordId must be provided');
}

// 댓글 삭제
export async function apiDeleteComment(commentId) {
  if (commentId != null) {
    const response = await api.delete(`/comment/${commentId}`);
    return response;
  }
  throw new Error('apiDeleteCommnet : commentIdmust be provided');
}
