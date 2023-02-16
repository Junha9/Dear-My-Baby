import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import './Home.css';
// api 함수 가져오기
import {
  apiGetRecommendTourList,
  apiGetRecommendFestivalList,
  apiGetRecommendRestaurantList,
  apiGetRecommendRestaurantDetail,
  apiGetRecommendTourListDetail,
} from '@/commons/api/recommend';
import { useEffect, useState } from 'react';

const RecommendPlaceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const placeId = params.get('place-id');
  // api 가지고 와야함.
  const [familyName, setFamilyName] = useState('가족');
  // const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [tourDetail, setTourDetail] = useState([]);
  const [festivalList, setfestivalList] = useState([]);
  // api 로  정보 받아오기
  useEffect(() => {
    if (placeId != null) {
      setFamilyName(window.localStorage.getItem('familyName'));
      console.log('placeId', placeId);
      // apiGetRecommendRestaurantDetail(placeId).then(({ data }) => setRestaurantDetail(data));
      apiGetRecommendTourListDetail(placeId).then(({ data }) => setTourDetail(data));
    }
  }, [placeId]);

  // const [restaurantList, tourList] = useOutletContext();
  // let place = null;
  // for (let i = 0; i < placeList.length; i++) {
  //   if (placeList[i].id == placeId) {
  //     place = placeList[i];
  //   }
  // }
  // console.log(placeId);

  const goToPlan = (e) => {
    alert(
      '이 장소를 장소바구니에 추가해주면서 계획을짜는 페이지로 넘어가게 하고 싶은데 어케 데이터를 주고 받을지 모르겠음',
    );
    navigate(`../../plan`);
  };

  return (
    <div className="detail-frame">
      <div className="detail-head">
        <h2>{tourDetail.tourName}</h2>
        <div className="detail-headsub">
          <p>{tourDetail.tourCatagory}</p>
          <a className="detail-head-add" onClick={() => goToPlan(tourDetail)}>
            장소바구니에 담기
          </a>
        </div>
      </div>
      <div className="detail-img-frame">
        <img
          className="detail-img"
          src={tourDetail.tourImgUrl}
          style={{ width: '90%', display: 'flex', flexDirection: 'column' }}
        />
      </div>
      <hr />
      <div className="detail-outline">
        <p>{tourDetail.tourOutline}</p>
      </div>

      <div>
        <div className="detail-subinfo1">
          <p>{tourDetail.tourWorkingTime}</p>
          <p>{tourDetail.tourPhoneNumber}</p>
        </div>
        <div className="detail-subinfo2">
          <p> {tourDetail.tourParkingLot}</p>
          <p>{tourDetail.tourClosedDay}</p>
        </div>
      </div>

      {/* <p>{[tourDetail]}</p>
      {/* <p>{tourDetail != null && JSON.stringify(tourDetail)}</p> */}
    </div>
  );
};
export default RecommendPlaceDetail;
