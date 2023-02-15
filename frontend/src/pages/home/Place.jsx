import PlaceList from './PlaceList';
import { useEffect, useState } from 'react';
import { apiGetRegion } from '@/commons/api/recommend';
const Place = ({ regionList }) => {
  // console.log('??', reg);
  // 최초에 한번 회원정보를 최신화한다
  // const [region, setRegion] = useState(place.place);
  // useEffect(() => {
  //   console.log(region);
  // });
  // console.log(region);
  // const places = [
  //   {
  //     placeId: 1,
  //     placeName: '헬로키티',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  //   {
  //     placeId: 2,
  //     placeName: '한라산',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  //   {
  //     placeId: 3,
  //     placeName: '한라산',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  //   {
  //     placeId: 4,
  //     placeName: '한라산',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  //   {
  //     placeId: 5,
  //     placeName: '한라산',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  //   {
  //     placeId: 6,
  //     placeName: '한라산',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  //   {
  //     placeId: 7,
  //     placeName: '한라산',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  //   {
  //     placeId: 8,
  //     placeName: '한라산',
  //     placeType: '관광명소',
  //     imgUrl: 'https://picsum.photos/200',
  //     lat: '37.49772884365532',
  //     lng: '127.04486129289809',
  //   },
  // ];

  return (
    <div className="placeList">
      {/* <p>{console.log(region)}</p> */}
      <PlaceList regionList={regionList}></PlaceList>
    </div>
  );
};

export default Place;
