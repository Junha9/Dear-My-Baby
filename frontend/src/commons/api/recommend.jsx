import { getApiInstance } from './http';
const api = getApiInstance();

// 음식점 리스트 가져오기
export async function apiGetRecommendRestaurantList(familyId) {
  console.log('from api jsx', familyId);
  // [
  //     {
  //       "restaurantId": 0,
  //       "restaurantName": "string",
  //       "restaurantMeinMenu": "string",
  //       "restaurantImgUrl": "string"
  //     }
  //   ]
  if (familyId != null) {
    const response = await api.get(`/retaurant?familyId=${familyId}`);
    return response;
  }
  throw new Error('apiGetRecommendRestaurantList : restaurant data must be provided');
}

// 개별 음식점 디테일 정보 가져오기
export async function apiGetRecommendRestaurantDetail(foodId) {
  // {
  //     "restaurantName": "string",
  //     "restaurantCategory": "string",
  //     "restaurantAddress": "string",
  //     "restaurantLatitude": "string",
  //     "restaurantLongitude": "string",
  //     "restaurantOutline": "string",
  //     "restaurantPhoneNumber": "string",
  //     "restaurantAvlParking": "string",
  //     "restaurantOpeningHours": "string",
  //     "restaurantClosedDay": "string",
  //     "restaurantMainMenu": "string",
  //     "restaurantImgUrl": "string",
  //     "regionId": 0
  //   }

  if (foodId != null) {
    const response = await api.get(`/retaurant/detail?restaurantId=${foodId}`);
    return response;
  }
  throw new Error('apiGetRecommendRestaurantDetail : restaurant data must be provided');
}

// 추천 장소 리스트 가져오기
export async function apiGetRecommendTourList(familyId) {
  // [
  //     {
  //       "tourId": 0,
  //       "tourName": "string",
  //       "tourImgUrl": "string"
  //     }
  //   ]
  if (familyId != null) {
    const response = await api.get(`/tour?familyId=${familyId}`);
    return response;
  }
  throw new Error('apiGetRecommendRestaurantList : tour data must be provided');
}

// 개별 장소 디테일 정보 가져오기
export async function apiGetRecommendTourListDetail(placeId) {
  // {
  //     "tourName": "string",
  //     "tourCategory": "string",
  //     "tourAddress": "string",
  //     "tourLatitude": "string",
  //     "tourLongitude": "string",
  //     "tourPhoneNumber": "string",
  //     "tourOutline": "string",
  //     "tourClosedDay": "string",
  //     "tourOpeningHours": "string",
  //     "tourAvlParking": "string",
  //     "tourAvlStrollerRental": "string",
  //     "tourImgUrl": "string",
  //     "regionId": 0
  //   }

  if (placeId != null) {
    const response = await api.get(`/tour/detail?tourId=${placeId}`);
    return response;
  }
  throw new Error('apiGetRecommendRestaurantDetail : restaurant data must be provided');
}

// 추천 축제 리스트 가져오기
export async function apiGetRecommendFestivalList(familyId) {
  // [
  //     {
  //       "tourId": 0,
  //       "tourName": "string",
  //       "tourImgUrl": "string"
  //     }
  //   ]
  if (familyId != null) {
    const response = await api.get(`/festival?familyId=${familyId}`, festivalList);
    return response;
  }
  throw new Error('apiGetRecommendFestivalList : restaurant data must be provided');
}

// 개별 축제 디테일 정보 가져오기
export async function apiGetRecommendFestivalDetail(familyId) {
  // {
  //     "tourName": "string",
  //     "tourCategory": "string",
  //     "tourAddress": "string",
  //     "tourLatitude": "string",
  //     "tourLongitude": "string",
  //     "tourPhoneNumber": "string",
  //     "tourOutline": "string",
  //     "tourClosedDay": "string",
  //     "tourOpeningHours": "string",
  //     "tourAvlParking": "string",
  //     "tourAvlStrollerRental": "string",
  //     "tourImgUrl": "string",
  //     "regionId": 0
  //   }

  if (familyId != null) {
    const response = await api.get(`/festival/detail?familyId=${familyId}`);
    return response;
  }
  throw new Error('apiGetRecommendRestaurantDetail : restaurant data must be provided');
}

export async function apiGetRegion() {
  const response = await api.get(`/region`);
  return response;
}
