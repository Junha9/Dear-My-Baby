import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import './Home.css'
const RecommendPlaceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const placeId = params.get('place-id');

  const [foodList, placeList] = useOutletContext();
  let place = null
  for (let i = 0; i < placeList.length; i++) {
    if (placeList[i].id == placeId) {
      place = placeList[i];
    }
  }
  const tourSpot = place
  console.log(placeId);

  const goToPlan = (e) => {
    alert('이 장소를 장소바구니에 추가해주면서 계획을짜는 페이지로 넘어가게 하고 싶은데 어케 데이터를 주고 받을지 모르겠음');
    navigate(`../../plan`)
  }


  return (
    <div className='detail-frame'>

      <div className='detail-head'>
        <h2>{tourSpot.name}</h2>
        <div className='detail-headsub'>
          <p>{tourSpot.catagory}</p>
          <a className='detail-head-add' onClick={() => goToPlan(tourSpot)}>장소바구니에 담기</a>
        </div>
      </div>
      <div className='detail-img-frame'>
        <img className='detail-img' src={tourSpot.imgUrl} style={{ width: '90%', display: 'flex', flexDirection: 'column' }} />
      </div>
      <hr />
      <div className='detail-outline'>
        <p>{tourSpot.outline}</p>
      </div>

      <div >
        <div className='detail-subinfo1'>
          <p>{tourSpot.workingTime}</p>
          <p>{tourSpot.phoneNumber}</p>
        </div>
        <div className='detail-subinfo2'>
          <p>  {tourSpot.parkingLot}</p>
          <p>{tourSpot.closedDay}</p>
        </div>
      </div>

      {/* <p>{[tourSpot]}</p> */}
      {/* <p>{tourSpot != null && JSON.stringify(tourSpot)}</p> */}
    </div>
  );
};
export default RecommendPlaceDetail;
