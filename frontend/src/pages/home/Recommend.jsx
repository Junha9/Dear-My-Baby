import { Outlet } from 'react-router-dom';
// api 함수 가져오기
import {
  apiGetRecommendTourList,
  apiGetRecommendFestivalList,
  apiGetRecommendRestaurantList,
} from '@/commons/api/recommend';
import { useEffect, useState } from 'react';

// const dummyRecommendFoodList = [
//   {
//     id: 1,
//     name: '모이세해장국',
//     catagory: '밥',
//     imgUrl: 'http://tong.visitkorea.or.kr/cms/resource/50/1860750_image2_1.jpg',
//     address: '제주특별자치도 제주시 연북로 221',
//     lat: 33.4817126104,
//     lng: 126.5051390387,
//     outline:
//       '계란을 풀어먹으면 더 맛있는 해장국 맛집이다. 대표메뉴는 해장국이다. 제주특별자치도 제주시에 있는 한식전문점이다.',
//     phoneNumber: '064-746-5128',
//     parkingLot: '주차 가능',
//     workingTime: '06:00~18:00',
//     closedDay: '연중무휴',
//     mainMenu: '해장국',
//   },
//   {
//     id: 2,
//     name: '돼지꿈	',
//     catagory: '한식',
//     imgUrl: 'http://tong.visitkorea.or.kr/cms/resource/88/1937288_image2_1.jpg',
//     address: '제주특별자치도 제주시 제원길 6',
//     lat: 33.4894531668,
//     lng: 126.4892402453,
//     outline: '제주시 연동에 위치한 고기국수 및 국밥 전문점으로 국수, 순대, 국밥 등 다양한 메뉴를 제공하는 음식점이다.',
//     phoneNumber: '064-746-5999',
//     parkingLot: '주차 가능',
//     workingTime: '	09:00 ~ 22:00',
//     closedDay: '	연중무휴',
//     mainMenu: '	고기국수',
//   },
//   {
//     id: 3,
//     name: '흑돈가 제주',
//     catagory: '고기',
//     imgUrl: 'http://tong.visitkorea.or.kr/cms/resource/27/1023927_image2_1.jpg',
//     address: '제주특별자치도 제주시 한라대학로 11',
//     lat: 33.4800372929,
//     lng: 126.473552933,
//     outline:
//       'KBS 고향이 보인다, SBS 맛대맛, 일본 남해방송 등 국내외 TV 프로그램에서 여러차례 소개된 제주도의 소문난 맛집인 제주 흑돈가는 제주 청정 흑돼지 전문점으로 참숯을 사용한 직화구이로 흑돼지의 담백하고 고소한 맛을 살려준다. 흑돈가에서는 최고 품질의 제주 청정 흑돼지만을 사용하며, 깔끔하고 세련된 실내공간은 그 맛을 더욱 돋보이게 한다.',
//     phoneNumber: '064-747-0088',
//     parkingLot: '주차 가능',
//     workingTime: '11:20 ~ 23:00',
//     closedDay: '연중무휴',
//     mainMenu: '흑돼지생구이',
//   },
// ];

// const dummyRecommendPlaceList = [
//   {
//     id: 4,
//     name: 'aaa',
//     catagory: 'type',
//     imgUrl: 'url',
//     address: 'string11',
//     lat: 123.12344,
//     lng: 38.1234123,
//     outline: 'string',
//     phoneNumber: '010-20333-2093',
//     parkingLot: true,
//     workingTime: 'string',
//     closedDay: 'Thursday',
//     mainMenu: 'dongas',
//   },
//   {
//     id: 5,
//     name: 'abb',
//     catagory: 'type2',
//     imgUrl: 'url12',
//     address: 'string1',
//     lat: 123.1234444,
//     lng: 38.1234123,
//     outline: 'string',
//     phoneNumber: '010-20333-2093',
//     parkingLot: true,
//     workingTime: 'string',
//     closedDay: 'Thursday',
//     mainMenu: 'dongas',
//   },
//   {
//     id: 6,
//     name: 'aaa',
//     catagory: 'type3',
//     imgUrl: 'url213',
//     address: 'string2',
//     lat: 123.555344,
//     lng: 38.443,
//     outline: 'string',
//     phoneNumber: '010-2043-2093',
//     parkingLot: true,
//     workingTime: 'string',
//     closedDay: 'Thursday',
//     mainMenu: 'dongas',
//   },
// ];

const Recommend = () => {
  //  state 변수들 설정
  const [familyId, setFamilyId] = useState(null);
  const [familyName, setFamilyName] = useState('가족');
  const [restaurantList, setRestaurantList] = useState([]);
  const [tourList, setTourList] = useState([]);
  const [festivalList, setfestivalList] = useState([]);
  // api 로  정보 받아오기
  useEffect(() => {
    setFamilyId(window.localStorage.getItem('familyId'));
    if (familyId != null) {
      setFamilyName(window.localStorage.getItem('familyName'));
      console.log('familyID', familyId);
      apiGetRecommendRestaurantList(familyId).then(({ data }) => setRestaurantList(data));
      apiGetRecommendTourList(familyId).then(({ data }) => setTourList(data));
      // console.log('restaurantList', restaurantList);
      // console.log('tourList', tourList);
      // apiGetRecommendFestivalList(familyId).then(({ dat }) => setfestivalList(dat));
    }
  }, [familyId]);
  return (
    <div>
      {/* <button onClick={() => console.log(restaurantList)}>panic</button> */}
      <Outlet context={[restaurantList, tourList]}></Outlet>
    </div>
  );
};
export default Recommend;
