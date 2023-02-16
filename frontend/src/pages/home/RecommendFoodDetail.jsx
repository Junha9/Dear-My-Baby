import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import './Home.css';
// api 함수 가져오기
import { apiGetRecommendRestaurantDetail } from '@/commons/api/recommend';
import { useEffect, useState } from 'react';
// import { restaurant } from '@mui/icons-material';

const RecommendPlaceDetail = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const foodId = params.get('food-id');
  console.log('foodId', foodId);

  // api 가지고 와야함.
  const [familyName, setFamilyName] = useState('가족');
  const [restaurant, setRestaurantDetail] = useState([]);
  // api 로  정보 받아오기
  useEffect(() => {
    if (foodId != null) {
      setFamilyName(window.localStorage.getItem('familyName'));
      console.log('foodId', foodId);
      apiGetRecommendRestaurantDetail(foodId).then(({ data }) => setRestaurantDetail(data));
      // apiGetRecommendTourListDetail(foodId).then(({ data }) => setrestaurantDetail(data));
    }
  }, [foodId]);

  // const [restaurantList, tourList] = useOutletContext();
  // let place = null;
  // for (let i = 0; i < placeList.length; i++) {
  //   if (placeList[i].id == foodId) {
  //     place = placeList[i];
  //   }
  // }
  // console.log(foodId);

  const goToPlan = (e) => {
    // alert(
    //   '이 장소를 장소바구니에 추가해주면서 계획을짜는 페이지로 넘어가게 하고 싶은데 어케 데이터를 주고 받을지 모르겠음',
    // );
    navigate(`../../plan/create`);
  };

  return (
    <div className="detail-frame">
      <div className="detail-head">
        <h2>{restaurant.restaurantName}</h2>
        <div className="detail-headsub">
          <p>{restaurant.restaurantCatagory}</p>
          <a className="detail-head-add" onClick={() => goToPlan(restaurant)}>
            장소바구니에 담기
          </a>
        </div>
      </div>
      <div className="detail-img-frame">
        <img
          className="detail-img"
          src={restaurant.restaurantImgUrl}
          style={{ width: '90%', display: 'flex', flexDirection: 'column' }}
        />
      </div>
      <hr />
      <div className="detail-outline">
        <p>{restaurant.restaurantOutline}</p>
      </div>

      <div>
        <div className="detail-subinfo1">
          <p>{restaurant.restaurantWorkingTime}</p>
          <p>{restaurant.restaurantPhoneNumber}</p>
        </div>
        <div className="detail-subinfo2">
          <p> {restaurant.restaurantParkingLot}</p>
          <p>{restaurant.restaurantClosedDay}</p>
        </div>
      </div>

      {/* <p>{[restaurant]}</p>
      {/* <p>{restaurant != null && JSON.stringify(restaurant)}</p> */}
    </div>
  );
};
export default RecommendPlaceDetail;
