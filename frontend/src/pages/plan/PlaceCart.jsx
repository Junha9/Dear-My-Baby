import { apiCreatePlan } from '@/commons/api/plan';
import { useState, useEffect, Fragment } from 'react';
import { Map as KakaoMap, MapMarker, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faLocationDot } from '@fortawesome/free-regular-svg-icons';
// import { faLocationDot } from '@fortawesome/free-light-svg-icons';

// color pallete
const colorPallete = ['red', 'blue', 'green', 'yellow', 'yellowgreen', 'pink'];

// 입력 받은 여행 기간을 불러와서 배열에 저장
const dummyDays = [
  {
    day: 1,
    course: [],
  },
  {
    day: 2,
    course: [],
  },
  {
    day: 3,
    course: [],
  },
];

// 여행 날 만큼 버튼 만들어주기

const dummymodalInfo = [
  {
    position: {
      lat: 37.4978288,
      lng: 127.0448612,
    },
    content: '스타벅스1',
    adressName: '강남구 저기어디로',
    placeURL: 'https://place.map.kakao.com/17884744',
    categoryCode: '카페',
    roadAddressName: '로',
    color: '',
    day: 0,
  },
  {
    position: {
      lat: 37.4978288,
      lng: 127.0451612,
    },
    content: '스타벅스2',
    adressName: '강남구 저기어디로',
    placeURL: 'https://place.map.kakao.com/17884744',
    categoryCode: '카페',
    roadAddressName: '로',
    color: '',
    day: 0,
  },
  {
    position: {
      lat: 37.4978288,
      lng: 127.0445612,
    },
    content: '스타벅스3',
    adressName: '강남구 저기어디로',
    placeURL: 'https://place.map.kakao.com/17884744',
    categoryCode: '카페',
    roadAddressName: '로',
    color: '',
    day: 0,
  },
  {
    position: {
      lat: 37.4948288,
      lng: 127.0445612,
    },
    content: '스타벅스4',
    adressName: '강남구 저기어디로',
    placeURL: 'https://place.map.kakao.com/17884744',
    categoryCode: '카페',
    roadAddressName: '로',
    color: '',
    day: 0,
  },
  {
    position: {
      lat: 37.4918288,
      lng: 127.0445612,
    },
    content: '스타벅스5',
    adressName: '강남구 저기어디로',
    placeURL: 'https://place.map.kakao.com/17884744',
    categoryCode: '카페',
    roadAddressName: '로',
    color: '',
    day: 0,
  },
  {
    position: {
      lat: 37.4878288,
      lng: 127.0445612,
    },
    content: '스타벅스6',
    adressName: '강남구 저기어디로',
    placeURL: 'https://place.map.kakao.com/17884744',
    categoryCode: '카페',
    roadAddressName: '로',
    color: '',
    day: 0,
  },
];

const PlacemodalInfo = () => {
  const [places, setPlaces] = useState(dummymodalInfo);
  const [days, setDays] = useState([[], [], []]);
  const [targetDayIndex, setTargetDayIndex] = useState(0);
  const [place2dayIndex] = useState(new Map());
  // 마커 클릭시 모달 띄우는 스위치
  const [open, isOpen] = useState(false);
  // 모달에 들어갈 정보 state
  const [modalInfo, setModalInfo] = useState();

  let currentDay = 0;
  // 날짜를 선택 할때 마다 다른 폴리라인을 만들어야함.
  function makeHandleDay(dayIndex) {
    return () => {

      setTargetDayIndex(dayIndex);
      console.log('targetDayIndex', targetDayIndex);
    }
  }


  // 버튼 날짜 만큼 자동 생성
  const makeButton = () => {
    // return <button onClick={handleDay1}>day{i}</button>;
    return days.map((day, index) => (
      <button key={index} onClick={makeHandleDay(index)}>
        day{index + 1}
      </button>
    ));
  };

  // 장소 바구니 로직
  // 마커를 클릭 했을 때
  //    1. 모달 창 띄우기
  //    2. 모달 창에 장소 정보 띄우기 (request.get)
  //    3. 모달 하단에 날짜 선택하기 + 숙소로 등록하기.
  //        ㄴ 클릭시 날짜에 해당하는 색을 가진 마커가 생성이 됨.
  //            생성되면서 날짜별 경로에 해당장소 추가. (reques.post( day$))
  //            숙소 등록은 하나에만.
  // day가 적힌 버튼 클릭 했을때
  //    1. request.get(day)에 해당하는 장소 정보 불러오기
  //    2. 장소들 맵에 띄워주면서 경로 보여주기
  // 경로 완료-> 홈화면으로

  // 고려사항
  // 1. 경로가 미완성일떄
  //    장소바구니 페이지에 들어왔을때 장소바구니 좌표 전체 + 현재까지 완성된 경로 다 보여주기?
  //    day 선택하면 그날짜  경로만 on, 나머지 day off , 장소바구니 보여주기.
  //
  // => 현재까지 완성된 경로 보여주면서 장소바구니 목록 보여주는거 빡셀거 같으면
  //    최초 랜더링 되었을때는 장소바구니 목록만 보여주기, 날짜 선택 했을때 경로 보여주기.
  //
  // 2. 경로 수정하는 방법
  //    두번 클릭 했을때 경로에서 빠져야함.
  //

  // 마커를 클릭 했을 때 실행 되는 함수
  function handleMarkerClick(content) {
    // console.log(content);
    setModalInfo(content)
    isOpen(true);
  }

  function addToPath(modalPlace, index) {
    // setTargetDayIndex(i);
    // 장소 바구니 돌면서 이름이 같은 장소 색 바꾸기
    for (let i = 0; i < places.length; i++) {
      if (places[i].content == modalPlace.content) {
        // 만일 이미 특정 날짜에 추가되어 있다면 거기서 삭제해준다
        const prevDayIndex = place2dayIndex.get(modalPlace.content);
        if (prevDayIndex != null) {
          const day = days[prevDayIndex];
          for (let k = 0; k < day.length; k++) {
            if (day[k].content == modalPlace.content) {
              day.splice(k);
              break;
            }
          }
        }

        // 장소를 타겟 날짜에 해당하는 색으로 칠한다
        // places[i].color = colorPallete[targetDayIndex];
        places[i].color = colorPallete[index];
        console.log('days@@@@@@@@@', days);

        // 장소를 날짜에 추가한다
        days[index].push(places[i]);
        setDays([...days]);
        place2dayIndex.set(modalPlace.content, targetDayIndex);

        break;
      }
    }
  }


  // 날짜에 해당하는 장소들 리스트 보여주기
  function pushPlacePerDay() {
    // console.log(points);
    // for (let i = 0; i < places.length; i++) {
    //   for (let j = 0; j < dummyDays.length; j++) {
    //     // dummymodalInfo[i] 장소이름이, dummydays[j]. content안에있는지 확인하기
    //     console.log(dummyDays[j].course);
    //     if (
    //       !dummyDays[j].course.includes(places[i].content) &&
    //       places[i].color === color &&
    //       colorPallete[j] === color
    //     ) {
    //       // console.log('??', places[i].color);
    //       // dummydays에 push하기
    //       dummyDays[j].course.push(places[i]);
    //     }
    //   }
    // }
    // console.log(dummyDays);
    // alert('경로가 저장되었습니다.');
  }

  const createNewPlan = () => {
    // data에는
    // apiCreatePlan(data)
  };

  return (
    <div>
      <KakaoMap
        center={{
          // 지도의 중심좌표 장소바구니 목록들중 중심 좌표로 들어오게 하기
          lat: 37.4978288,
          lng: 127.0448612,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100vh',
        }}
        level={4} // 지도의 확대 레벨
      >


        {/* button 모음 메뉴 */}
        <div
          id="dayButton"
          className="daysDiv"
          style={{ position: 'absolute', left: '0vw', top: '8vh', backgroundColor: 'transparent', zIndex: '2' }}
        >
          <button onClick={() => console.log(place2dayIndex)}>panic button</button>
          <button onClick={() => console.log(days)}>으아아</button>
          {makeButton()}
        </div>


        {/* day별 장소 끼리 선긋는 component */}
        <Polyline
          path={days.map((day) => day.map((place) => place.position))}
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={'#FFAE00'} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'solid'} // 선의 스타일입니다
        />

        {/* 장소바구니에 담긴 장소들 마커로 찍기 */}
        {places.map((place) => (
          // 북마크된 장소 띄우기.
          <Fragment key={`modalInfo-${place.content}`}>
            {/*
            /> */}
            <CustomOverlayMap position={place.position}  >
              <div
                onClick={() => { handleMarkerClick(place) }}
                style={{ width: '32px', height: '32px' }}
              > <FontAwesomeIcon icon={faLocationDot} size="2x" color={place.color} /></div>
            </CustomOverlayMap>



          </Fragment>
        ))}
        {open && <CustomOverlayMap position={{ lat: modalInfo.position.lat, lng: modalInfo.position.lng }}>
          <div
            className="wrap"
            style={{
              backgroundColor: 'white',
              padding: '5%',
              borderRadius: '5%',
              boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.05)',
              whiteSpace: 'pre-wrap',
              width: '180px',
            }}
          >
            <button
              className="close"
              onClick={() => isOpen(false)}
              title="닫기"
              style={{
                fontSize: '0.6rem',
                fontWeight: '900',
                padding: '1% 3%',
                position: 'absolute',
                top: '3%',
                right: '2%',
              }}
            >
              X
            </button>
            <div className="modalInfo">
              <div className="title" style={{ fontWeight: '700', margin: '4% 1%' }}>
                {modalInfo.content}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(0, 0, 0, 0.7)' }}>{modalInfo.categoryGroupName}</div>
              <div className="modal__body">
                <div className="ellipsis" style={{ fontSize: '0.9rem' }}>
                  <a href={modalInfo.placeURL}>
                    Detail
                  </a>
                </div>
                <div className="modal__button">
                  {/* 날짜 수 만큼 버튼 만들기  onClick={addToPath(modalInfo)} */}
                  {days.map((day, index) => (
                    <button key={index} onClick={() => {
                      // dayButtonFunction(index, modalInfo)
                      // makeHandleDay(index)
                      console.log('color', colorPallete[targetDayIndex]);
                      // setTargetDayIndex(index);
                      addToPath(modalInfo, index)
                      isOpen(false)

                      // isOpen(false)
                    }} style={{ display: 'flex', width: '50px', height: '25px' }}>
                      day{index + 1}
                    </button>

                  ))}
                  {/* {modalInfo.categoryGroupName}이 숙박이면 숙소 마커 세우는 함수 */}
                  <div>

                  </div>

                  {/* <div className="jibun ellipsis">{modalInfo.addressName}</div> */}
                </div>
              </div>
            </div>
          </div>
        </CustomOverlayMap>}
      </KakaoMap>




      <div style={{ position: 'absolute', right: '0vw', bottom: '2vh', backgroundColor: 'transparent', zIndex: '2' }}>
        <button onClick={pushPlacePerDay}>경로 추가</button>
        {/* 이어진 경로가 있는 상태에서 경로 추가 누르면 선 안 없어지고 냅두기, 경로가 추가되지 않은 상태에서 다른날 누르면 이어진선 사라지게하기 */}
        <Link to={'/'}>
          <button onClick={createNewPlan}>계획 완료하기</button>
        </Link>
      </div>
    </div >
  );
};
export default PlacemodalInfo;
