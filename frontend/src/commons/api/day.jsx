import { getApiInstance } from './http';
const api = getApiInstance();

// 여행 계획 생성
export async function apiCreateDay(data) {
  data = {
    dayId: 6,
    dayNumber: 2,
    planId: 13,
    places: [
      {
        placeOrder: 2,
        placeName: 'jgghh',
        placeLatitude: '22.112',
        placeLongitude: '1',
        placeAddress: 'dddd',
        dayId: 0,
      },
    ],
  };

  if (data != null) {
    const response = await api.post(`/day`, data);
    console.log(response);
    return response;
  }
  throw new Error('apiCreatePlan : familyId must be provided');
}

// 데이별 장소리스트 조회
export async function apiDayPlace(data) {
  data = [
    {
      placeOrder: 0,
      placeName: 'hi',
      placeLatitude: '22',
      placeLongitude: '22',
      placeAddress: 'ff',
      dayId: 0,
    },
  ];

  if (data != null) {
    const response = await api.get(`/day/place`);
    console.log(response);
    return response;
  }
  throw new Error('apiDayPlace : familyId must be provided');
}
