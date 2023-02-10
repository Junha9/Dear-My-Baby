import { apiCreatePlan } from '@/commons/api/plan';
import { useState, useEffect, Fragment } from 'react';
import { Map as KakaoMap, MapMarker, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import { Link } from 'react-router-dom';
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

const dummyCart = [
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
    color: 'black',
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
    color: 'black',
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
    color: 'black',
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
    color: 'black',
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
    color: 'black',
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
    color: 'black',
    day: 0,
  },
];

const PlaceCart = () => {
  const [places, setPlaces] = useState(dummyCart);
  const [days, setDays] = useState([[], [], []]);
  const [targetDayIndex, setTargetDayIndex] = useState(0);
  const [place2dayIndex] = useState(new Map());

  let currentDay = 0;
  // 날짜를 선택 할때 마다 다른 폴리라인을 만들어야함.
  function makeHandleDay(dayIndex) {
    return () => {
      setTargetDayIndex(dayIndex);
    };
  }

  // function handleDay(e) {
  //   currentDay = e.target.value;
  //   setColor(colorPallete[currentDay]);
  //   console.log(color);
  // }

  // 버튼 날짜 만큼 자동 생성
  const makeButton = () => {
    // return <button onClick={handleDay1}>day{i}</button>;
    return days.map((day, index) => (
      <button key={index} onClick={makeHandleDay(index)}>
        day{index + 1}
      </button>
    ));
  };

  // 마커를 클릭 했을 때 실행 되는 함수
  function handleMarkerClick(content) {
    // 장소 바구니 돌면서 이름이 같은 장소 색 바꾸기
    for (let i = 0; i < places.length; i++) {
      if (places[i].content == content) {
        // 만일 이미 특정 날짜에 추가되어 있다면 거기서 삭제해준다
        const prevDayIndex = place2dayIndex.get(content);
        if (prevDayIndex != null) {
          const day = days[prevDayIndex];
          for (let k = 0; k < day.length; k++) {
            if (day[k].content == content) {
              day.splice(k);
              break;
            }
          }
        }

        // 장소를 타겟 날짜에 해당하는 색으로 칠한다
        places[i].color = colorPallete[targetDayIndex];

        // 장소를 날짜에 추가한다
        days[targetDayIndex].push(places[i]);
        setDays([...days]);
        place2dayIndex.set(content, targetDayIndex);

        break;
      }
    }
    // places.map((place) => {
    //   if (place.content == content) {
    //     place.color = colorPallete[targetDayIndex];
    //     setPlaces([...places]);
    //     const spot = { lat: place.position.lat, lng: place.position.lng };
    //     // console.log(place.position);
    //     // console.log(points);
    //     //
    //     if (points.length === 0) {
    //       points.push(spot);
    //     } else {
    //       points.forEach((point) => {
    //         console.log(point.lat === spot.lat && point.lng === spot.lng);
    //         if (point.lat === spot.lat && point.lng === spot.lng) {
    //           console.log('point', point);
    //         } else {
    //           points.push(point);
    //         }
    //       });
    //     }
    //   }
    // });
    // console.log('points', points);
    // 선을 이으려면, 좌표를 points에 넣어 주어야함.

    // 날짜 별로 다른 선들이 생겨야함.
    // 선에 이어진 좌표를 다시 클릭하면 없어져야함.
  }

  // 날짜에 해당하는 장소들 리스트 보여주기
  function pushPlacePerDay() {
    // console.log(points);
    // for (let i = 0; i < places.length; i++) {
    //   for (let j = 0; j < dummyDays.length; j++) {
    //     // dummycart[i] 장소이름이, dummydays[j]. content안에있는지 확인하기
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
      <div
        id="dayButton"
        className="daysDiv"
        style={{ position: 'absolute', left: '0vw', top: '8vh', backgroundColor: 'transparent', zIndex: '2' }}
      >
        <button onClick={() => console.log(place2dayIndex)}>panic button</button>
        <button onClick={() => console.log(days)}>으아아</button>
        {makeButton()}
        {/* 여행 기간 만큼 버튼 자동생성하기 */}
      </div>
      {/*  */}
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
        <Polyline
          path={days.map((day) => day.map((place) => place.position))}
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={'#FFAE00'} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'solid'} // 선의 스타일입니다
        />
        {places.map((place) => (
          // 북마크된 장소 띄우기.
          <Fragment key={`cart-${place.content}`}>
            {/* <MapMarker // 마커를 생성합니다
              position={cart.position}
            /> */}
            <CustomOverlayMap position={place.position}>
              <div
                onClick={() => handleMarkerClick(place.content)}
                style={{ width: '32px', height: '32px', backgroundColor: place.color }}
              ></div>
            </CustomOverlayMap>
          </Fragment>
        ))}
      </KakaoMap>
      <div style={{ position: 'absolute', right: '0vw', bottom: '2vh', backgroundColor: 'transparent', zIndex: '2' }}>
        <button onClick={pushPlacePerDay}>경로 추가</button>
        {/* 이어진 경로가 있는 상태에서 경로 추가 누르면 선 안 없어지고 냅두기, 경로가 추가되지 않은 상태에서 다른날 누르면 이어진선 사라지게하기 */}
        <Link to={'/'}>
          <button onClick={createNewPlan}>계획 완료하기</button>
        </Link>
      </div>
    </div>
  );
};
export default PlaceCart;
