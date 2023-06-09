/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { apiCreatePlan, apiGetPlan } from '@/commons/api/plan';
import { useState, useEffect, Fragment, useReducer } from 'react';
import { Map as KakaoMap, MapMarker, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiCreateDay } from '@/commons/api/day';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { apiGetBookmarkList } from '@/commons/api/bookmark';
import { Component } from 'react';
// import { faLocationDot } from '@fortawesome/free-regular-svg-icons';
// import { faLocationDot } from '@fortawesome/free-light-svg-icons';

// color pallete
const colorPallete = ['red', 'blue', 'green', 'yellow', 'yellowgreen', 'pink'];

export default function PlaceCart() {
  // url에서 planId를 읽어들여 plan, bookmarkList를 가져온다
  const { planId } = useParams();
  const [plan, setPlan] = useState(null);
  const [days, setDays] = useState([]);
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    // 여행 계획 정보 가져오기
    apiGetPlan(planId).then(({ data }) => {
      setPlan(data);
      setDays(Array.from({ length: data.planPeriod }, () => Array(0)));
    });
    // api 요청해서 북마크 리스트를 가져오와서 bookmarks state에 저장
    apiGetBookmarkList(planId).then(({ data }) => setBookmarkList(data));
  }, [planId]);

  const [bookmark2dayIndex] = useState(new Map());
  // 장소바구니 내용 가져오기 위한 getAPI 호출 파라미터
  // 장소 바구니에 담긴 장소들

  // 마커 클릭시 모달 띄우는 스위치
  const [open, isOpen] = useState(false);
  // 모달에 들어갈 정보 state
  const [modalInfo, setModalInfo] = useState();

  let currentDay = 0;
  // 날짜를 선택 할때 마다 다른 폴리라인을 만들어야함.

  // 버튼 날짜 만큼 자동 생성
  const makeButton = () => {
    return days.map((day, index) => <button key={index}>day{index + 1}</button>);
  };

  // 마커를 클릭 했을 때 실행 되는 함수
  function handleMarkerClick(content) {
    console.log(modalInfo);
    setModalInfo(content);
    isOpen(true);
  }

  function addToPath(modalPlace, index) {
    // 장소 바구니 돌면서 이름이 같은 장소 색 바꾸기
    const prevDayIndex = bookmark2dayIndex.get(modalPlace.bookmarkId);
    // 만일 이미 특정 날짜에 추가되어 있다면 거기서 삭제해준다
    if (prevDayIndex != null) {
      const day = days[prevDayIndex];
      for (let k = 0; k < day.length; k++) {
        if (day[k].bookmarkId == modalPlace.bookmarkId) {
          day.splice(k, 1);
          break;
        }
      }
    }

    // 장소를 날짜에 추가한다
    days[index].push(modalPlace);
    setDays([...days]);
    bookmark2dayIndex.set(modalPlace.bookmarkId, index);
  }

  // days.length 만큼 반복해서 apiPOST 요청.
  // data에는
  // apiCreatePlan(data)
  const createNewPlan = (index) => {
    // console.log(plan.days[0].dayId, 'days', days);
    console.log('day path', index);

    let perDay = [];
    for (let j = 0; j < days[index].length; j++) {
      // console.log('days[i][j]', days[i][j]);
      perDay.push({
        placeOrder: j,
        placeName: days[index][j].bookmarkName,
        placeLatitude: days[index][j].bookmarkLatitude,
        placeLongitude: days[index][j].bookmarkLongitude,
        placeAddress: days[index][j].bookmarkAdress,
        dayId: plan.days[index].dayId,
      });
    }

    // console.log('days[i]i[j]', days[i][j]);
    // perDay.push(days[i][j]);

    const dailyPlan = {
      dayId: plan.days[index].dayId,
      dayNumber: index + 1,
      planId: planId,
      places: perDay,
    };
    console.log(dailyPlan);
    apiCreateDay(dailyPlan).then((res) => console.log(res));
    async () => {
      const response = await fetch(apiCreateDay(dailyPlan));
      console.log('response', response);
    };
    // }
    // // async () => {
    // //   setDays(response.data);
    // // };

    alert('경로가 저장되었습니다.');
  };

  let dnum;

  return (
    <div>
      {/* <button onClick={() => console.log(days)}>panic</button> */}
      <KakaoMap
        center={{
          // 지도의 중심좌표 장소바구니 목록들중 중심 좌표로 들어오게 하기
          lat: plan != null ? Number(plan.planLatitude) : 37,
          lng: plan != null ? Number(plan.planLongitude) : 127,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100vh',
        }}
        level={10} // 지도의 확대 레벨
      >
        {/* button 모음 메뉴 */}
        {/* <div
          id="dayButton"
          className="daysDiv"
          style={{ position: 'absolute', left: '0vw', top: '8vh', backgroundColor: 'transparent', zIndex: '2' }}
        >
          <button onClick={() => console.log(bookmark2dayIndex)}>panic button</button>
          <button onClick={() => alert(bookmarkList.planId)}>으아아</button>
          {makeButton()}
        </div> */}

        {/* day별 장소 끼리 선긋는 component */}
        <Polyline
          path={days.map((day) =>
            day.map((bookmark) => ({ lat: bookmark.bookmarkLatitude, lng: bookmark.bookmarkLongitude })),
          )}
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={'#FFAE00'} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'solid'} // 선의 스타일입니다
        />

        {/* 장소바구니에 담긴 장소들 마커로 찍기 */}
        {bookmarkList.map((bookmark) => (
          <CustomOverlayMap
            key={bookmark.bookmarkId}
            position={{ lat: bookmark.bookmarkLatitude, lng: bookmark.bookmarkLongitude }}
          >
            <div style={{ width: '32px', height: '32px' }}>
              {' '}
              {/* Marker */}
              <FontAwesomeIcon
                icon={faLocationDot}
                size="2x"
                color={colorPallete[bookmark2dayIndex.get(bookmark.bookmarkId) % colorPallete.length]}
                onClick={() => {
                  handleMarkerClick(bookmark);
                }}
              />
            </div>
          </CustomOverlayMap>
        ))}
        {open && (
          <CustomOverlayMap position={{ lat: modalInfo.bookmarkLatitude, lng: modalInfo.bookmarkLongitude }}>
            {/* <h1>{modalInfo.placeLatitude}</h1> */}
            <div
              className="wrap"
              style={{
                backgroundColor: 'white',
                padding: '5%',
                borderRadius: '5%',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)',
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
              <div className="info">
                <div className="title" style={{ fontWeight: '700', margin: '4% 1%', width: '275px', height: '50px' }}>
                  <p style={{ fontSize: '20px' }}>{modalInfo.bookmarkName}</p>
                  <a style={{ textDecoration: 'none', fontSize: '14px' }} href={modalInfo.bookmarkUrl}>
                    상세정보
                  </a>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(0, 0, 0, 0.7)' }}>{modalInfo.categoryGroupName}</div>
                <div className="body">
                  <div className="ellipsis" style={{ fontSize: '0.9rem' }}></div>
                  <div></div>
                  <div className="modal__button">
                    {/* 날짜 수 만큼 버튼 만들기  onClick={addToPath(modalInfo)} */}
                    {days.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          // dayButtonFunction(index, modalInfo)
                          // makeHandleDay(index);
                          // console.log('color', colorPallete[targetDayIndex]);
                          // setTargetDayIndex(targetDayIndex);
                          // index = 몇번째 날 갈 장소인지 나타내는 인덱스
                          console.log('modalInfo', modalInfo);
                          addToPath(modalInfo, index);
                          isOpen(false);
                        }}
                        style={{ display: 'flex', width: '64px', height: '32px' }}
                      >
                        day{index + 1}
                      </button>
                    ))}
                    {/* {modalInfo.categoryGroupName}이 숙박이면 숙소 마커 세우는 함수 */}
                    <div></div>

                    {/* <div className="jibun ellipsis">{modalInfo.addressName}</div> */}
                  </div>
                </div>
              </div>
            </div>
          </CustomOverlayMap>
        )}
      </KakaoMap>

      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: '4vw',
          top: '8vh',
          backgroundColor: 'transparent',
          zIndex: '2',
        }}
      >
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => createNewPlan(index)}
            style={{ display: 'flex', height: '32px', justifyContent: 'center' }}
          >
            <p>day{index + 1}</p>
          </button>
        ))}

        <Link to={'/'}>
          <button onClick={createNewPlan}>계획 완료하기</button>
        </Link>
      </div>
    </div>
  );
}
