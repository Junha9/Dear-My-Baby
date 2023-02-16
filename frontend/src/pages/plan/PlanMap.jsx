import { useState, useEffect, useRef, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
import PlaceBasket from './PlaceBasket';
import { apiGetBookmarkList, apiCreateBookmark, apiDeleteBookmark } from '@/commons/api/bookmark';

const kakao = window.kakao;

export default function PlanMap({ plan }) {
  const [bookmarkList, setBookmarkList] = useState();
  useEffect(() => {
    if (plan != null) {
      apiGetBookmarkList(plan.planId).then(({ data }) => setBookmarkList(data));
      setKeyword(plan.planDestination);
    }
  }, [plan]);

  const [keyword, setKeyword] = useState('');
  const [kakaoMap, setKakaoMap] = useState(null);
  const [kakaoMapcenter, setKakaoMapCenter] = useState();
  const [markers, setMarkers] = useState([]);
  const [info, setInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [placeBasket, setPlaceBasket] = useState([]);

  function kakaoSearch() {
    if (!kakaoMap || !keyword) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // console.log('data', data);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            adressName: data[i].address_name,
            placeURL: data[i].place_url,
            categoryCode: data[i].category_group_code,
            roadAddressName: data[i].road_address_name,
            categoryGroupName: data[i].category_group_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        // 지도 중심 좌표 찾기
        setKakaoMapCenter(kakaoMap.getCenter());

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        kakaoMap.setBounds(bounds);
      }
    });
  }

  // keyword가 바뀔 때마다 실행
  useEffect(kakaoSearch, [keyword]);

  // 북마크 추가 버튼 눌려을때
  const addToBookMark = () => {
    if (bookmarkList && !bookmarkList.find((e) => e.bookmarkName == info.content)) {
      // placeBasket.push(info);
      // console.log(bookmarkList.concat(info));
      console.log(bookmarkList);
      console.log('info', info);
      const justAddedBookmark = {
        planId: plan.planId,
        bookmarkName: info.content,
        bookmarkAddress: info.addressName,
        bookmarkLatitude: info.position.lat,
        bookmarkLongitude: info.position.lng,
        bookmarkUrl: info.placeURL,
        bookmarkCategory: info.categoryGroupName,
        //url, categorycode
      };

      // setBookmarkList(bookmarkList.concat(info.content));
      apiCreateBookmark(justAddedBookmark).then((res) => setBookmarkList(res.data));
    }
  };

  const deleteBookmark = () => {
    if (bookmarkList && bookmarkList.find((e) => e.bookmarkName == info.content)) {
      console.log(bookmarkList.find((e) => e.bookmarkName == info.content).bookmarkId);
      const toDeleteBookmark = bookmarkList.find((e) => e.bookmarkName == info.content).bookmarkId;
      apiDeleteBookmark(toDeleteBookmark).then((res) => setBookmarkList(res.data));
    }
  };

  // 북마크 삭제 버튼
  // const deleteToBookMark = () => {
  //   setPlaceBasket({ placeBasket: placeBasket.filter((places) => places.adressName != info.addressName) });
  //   console.log('삭제후', placeBasket);
  // };

  return (
    <div>
      <div style={{ position: 'absolute', left: '0vw', top: '9vh', backgroundColor: 'transparent', zIndex: '2' }}>
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          // onKeyPress={onClick}
          type="text"
          placeholder="장소 검색 하세요"
        />
        <button onClick={kakaoSearch}>검색</button>
        {/* 장소 바구니 보러갈 때 쿼리로 planid를 넘겨 주기  */}
        <button>
          <Link to="../place-cart" style={{ textDecoration: 'none', color: 'white' }} state={plan}>
            장소바구니 보러가기
          </Link>
        </button>
        {/* <button
          onClick={() => {
            console.log(plan);
          }}
        >
          console log
        </button> */}
      </div>

      <Map // 로드뷰를 표시할 Container
        center={{
          lat: plan != null ? plan.planLatitude : 37.79,
          lng: plan != null ? plan.planLongitude : 127.43003,
        }}
        style={{
          width: '100%',
          height: '100vh',
        }}
        level={10}
        onCreate={setKakaoMap}
      >
        {markers.map((marker, index) => (
          <Fragment key={index}>
            <MapMarker
              position={marker.position}
              onClick={() => {
                setInfo(marker);
                setIsOpen(true);
              }}
            />

            {isOpen && (
              <CustomOverlayMap
                position={{
                  lat: info.position.lat,
                  lng: info.position.lng,
                }}
              >
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
                    onClick={() => setIsOpen(false)}
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
                    <div className="title" style={{ fontWeight: '700', margin: '4% 1%' }}>
                      {info.content}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(0, 0, 0, 0.7)' }}>{info.categoryGroupName}</div>
                    <div className="body">
                      <div className="desc">
                        <div className="ellipsis" style={{ fontSize: '0.9rem' }}>
                          {info.roadAddressName}
                        </div>
                        <div className="jibun ellipsis">{info.addressName}</div>
                        <div>
                          <a
                            href={info.placeURL}
                            target="_blank"
                            className="link"
                            rel="noreferrer"
                            style={{ fontSize: '0.9rem' }}
                          >
                            상세정보
                          </a>
                          {bookmarkList.find((e) => e.bookmarkName == info.content) != null ? (
                            // 여기다 하트 색깔 빼는거 + 북마크 리스트에서 빼는거 해야함.
                            <FavoriteIcon
                              style={{ color: 'tomato', fontSize: '1.5rem', position: 'absolute', right: '5%' }}
                              onClick={deleteBookmark}
                              // console.log('heart', bookmarkList.find((e) => e.bookmarkName == info.content))
                            ></FavoriteIcon>
                          ) : (
                            <FavoriteBorderIcon
                              style={{ color: 'tomato', fontSize: '1.5rem', position: 'absolute', right: '5%' }}
                              onClick={addToBookMark}
                            ></FavoriteBorderIcon>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomOverlayMap>
            )}
          </Fragment>
        ))}

        {/* <div className="place-basket-div">
          <h4>장소바구니</h4>
          {bookmarkList.map((basketplace) => {
            return <PlaceBasket key={basketplace.addressName} basketplace={basketplace}></PlaceBasket>;
          })}
        </div> */}
        <div className="place-basket-div" style={{ left: '0', width: '50%' }}>
          <h4>장소바구니</h4>
          {bookmarkList != null &&
            bookmarkList.map((bookmark) => <div key={bookmark.bookmarkId}>{bookmark.bookmarkName}</div>)}
        </div>
      </Map>
    </div>
  );
}

PlanMap.propTypes = {
  plan: PropTypes.any,
};
