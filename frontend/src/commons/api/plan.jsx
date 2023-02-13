import { getApiInstance } from './http';
import axios from 'axios';
const api = getApiInstance();

// 여행 계획 생성
export async function apiCreatePlan(data) {
  
  if (data.familyId != null) {
    const response = await api.post(`/plan/new`, data);
    return response;
  }
  throw new Error('apiCreatePlan : familyId must be provided');
}

// familyId 를 통해 가족별 여행 계획 리스트를 조회한다.
export async function apiGetPlanList(familyId) {
  if (familyId != null) {
    const response = await api.get(`/plan/${familyId}`);
    return response;
  }
  throw new Error('apiGetPlanList : familyId must be provided');
}

// 여행 계획 단일 조회
export async function apiGetPlan(planId) {
  if (planId != null) {
    const response = await api.get(`/plan/detail/${planId}`);
    return response;
  }
  throw new Error('apiGetPlan : planId must be provided');
}

// 여행 계획 수정
export async function apiUpdatePlan(planId) {
  const planData = {
    familyId: 211,
    planName: '수정맨',
    planDestination: '몽고르',
    startDate: '2023-02-08',
    endDate: '2023-02-10',
  };
  if (planId != null) {
    const response = await api({
      method: 'PUT',
      url: `/plan/update/${planId}`,
      data: planData,
    });
    return response;
  }
  throw new Error('apiUpdatePlan : planId must be provided');
}

//여행 계획 삭제
export async function apiDeletePlan(planId) {
  if (planId != null) {
    const response = await api.delete(`/plan/${planId}`);
    return response;
  }
  throw new Error('apiDeletePlan : planId must be provided');
}
