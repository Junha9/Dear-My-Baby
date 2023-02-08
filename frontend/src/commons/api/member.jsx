import { getApiInstance } from './http';
const api = getApiInstance();

// 아이디가 중복되는지 검사한다
export async function apiCheckMember(memberId) {
  if (memberId != null) {
    const response = await api.get(`/member/check/${memberId}`);
    return response;
  }
  throw new Error('apiCheckMember : memberId must be provided');
}

// 새로운 회원을 가입한다
export async function apiCreateMember(member, imgFile) {
  if (member != null && imgFile != null) {
    const formData = new FormData();
    formData.append(
      'memberDto',
      new Blob([JSON.stringify(member)], {
        type: 'application/json',
      }),
    );
    formData.append('multipartFile', imgFile);

    const response = await api.post(`/member`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  }
  throw new Error('apiCreateMember : member, imgFile must be provided');
}

// 회원을 로그인시키며 refresh-token을 Cookie로, access-token을 body로 받아온다
export async function apiLoginMember(memberId, password) {
  if (memberId != null && password != null) {
    const response = await api.post(`/member/login`, { memberId, password });
    return response;
  }
  throw new Error('apiCreateMember : memberId, password must be provided');
}

// access-token으로 회원 정보를 가져온다
export async function apiGetMember(accessToken) {
  if (accessToken != null) {
    const response = await api.get(`/member/detail`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  }
  throw new Error('apiGetMember : accessToken must be provided');
}

// refresh-token을 Cookie로 보내 access-token을 재발급한다
export async function apiGetMemberToken() {
  // Cookie가 넘어가게 설정해야 성공한다
  const response = await api.get(`/member/token`);
  return response;
}

// 회원 정보를 수정한다
export async function apiUpdateMember(member, accessToken) {
  if (member != null && accessToken != null) {
    const response = await api.put(`/member`, member, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  }
  throw new Error('apiUpdateMember : memberId must be provided');
}

// 회원을 탈퇴한다
export async function apiDeleteMember(memberId, accessToken) {
  if (memberId != null && accessToken != null) {
    const response = await api.delete(`/member/${memberId}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  }
  throw new Error('apiDeleteMember : memberId, accessToken must be provided');
}
