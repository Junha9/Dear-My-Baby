import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import PlaceBasket from './PlaceBasket';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const kakao = window.kakao;

export default function PlanMap() {
  // 첫 검색어 중심 좌표 데이터


  const location = useLocation();
  const propWord = location.state?.keyword;
  const propLat = location.state?.lat;
  const propLng = location.state?.lng;
  // console.log('proped from SelectPlace:', propWord)
  const initKeyword = propWord;

  const keyWordRef = useRef();

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  // 지역선택 안했을 경우 ..?
  const [keyWord, setKeyWord] = useState(initKeyword);
  const [initLat, setInitLat] = useState(propLat)   // 최초 위도
  const [initLng, setInitLng] = useState(propLng)   // 최초 경도



  const [isOpen, setIsOpen] = useState(false);
  const [placeBasket, setPlaceBasket] = useState([]);
  const [center, setCenter] = useState();

  // 검색어 상태 변화
  const onChange = (e) => {
    setKeyWord(e.target.value);
  };

  // 검색 키워드
  const onClick = () => {
    console.log(keyWordRef.current.value);
    setKeyWord(keyWordRef.current.value);
    // console.log({ info });
    // console.log(searchWord);
  };

  // 랜더링 되고 최초로 한번만 실행하는 useEffect 함수
  useEffect(() => {
    console.log('just checking');
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyWord, (data, status, _pagination) => {
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
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        // 지도 중심 좌표 찾기
        // setCenter(map.getCenter())

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        // map.setBounds(bounds);
      }
    });

  }, [])

  // 검색할 때 마다 실행
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyWord, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log('data', data);
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
        setCenter(map.getCenter());

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [keyWord]);

  // 북마크 추가 버튼 눌려을때
  const addToBookMark = () => {
    if (placeBasket && !placeBasket.includes(info)) {
      // placeBasket.push(info);
      setPlaceBasket(placeBasket.concat(info));
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
          ref={keyWordRef}
          value={keyWord}
          onChange={onChange}
          onKeyPress={onClick}
          type="text"
          placeholder="장소 검색 하세요"
        />
        <button onClick={onClick}>검색</button>
        <button>
          <Link to="../place-cart" style={{ textDecoration: 'none', color: 'white' }}>
            장소바구니 보러가기
          </Link>
          <button
            onClick={() => {
              alert(center);
            }}
          >
            console log
          </button>
        </button>
      </div>

      <Map // 로드뷰를 표시할 Container
        center={{
          lat: initLat,
          lng: initLng,
        }}
        style={{
          width: '100%',
          height: '100vh',
        }}
        level={10}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <>
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => {
                setInfo(marker);
                setIsOpen(true);
              }}
            />

            {isOpen && (
              <CustomOverlayMap
                key={`${marker.position.lng}`}
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
                      <div className="img">
                        {/* <img
                          src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                          width="73"
                          height="70"
                          alt="카카오 스페이스닷원"
                        /> */}
                      </div>
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
                          {placeBasket.includes(info) ? (
                            <FavoriteIcon
                              style={{ color: 'tomato', fontSize: '1.5rem', position: 'absolute', right: '5%' }}
                              onClick={addToBookMark}
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
          </>
        ))}

        <div className="place-basket-div">
          <h4>장소바구니</h4>
          {placeBasket.map((basketplace) => {
            return <PlaceBasket key={basketplace.addressName} basketplace={basketplace}></PlaceBasket>;
          })}
        </div>
      </Map>
    </div>
  );
}

PlanMap.propTypes = {
  //   records,
};
