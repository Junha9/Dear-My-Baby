import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceBasket from './PlaceBasket';

const kakao = window.kakao;

export default function PlanMap() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [keyWord, setKeyWord] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [placeBasket, setPlaceBasket] = useState([]);

  // 검색어 상태 변화
  const onChange = (e) => {
    setKeyWord(e.target.value);
  };

  // 검색 키워드
  const onClick = () => {
    let searchWord = keyWord;
    // console.log({ info });
    // console.log(searchWord);
  };

  useEffect(() => {
    if (!map) return;
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
        <input value={keyWord} onChange={onChange} type="text" placeholder="장소 검색 하세요" />
        <button onClick={onClick}>검색</button>
        <button>
          <Link to="../place-cart" style={{ textDecoration: 'none', color: 'white' }}>
            장소바구니 보러가기
          </Link>
        </button>
      </div>

      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '100vh',
        }}
        level={3}
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
                <div className="wrap" style={{ backgroundColor: 'white' }}>
                  <div className="info">
                    <div className="title">
                      {info.content}
                      <div>
                        {' '}
                        <button className="close" onClick={() => setIsOpen(false)} title="닫기">
                          X
                        </button>
                      </div>
                    </div>
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
                        <div className="ellipsis">{info.roadAddressName}</div>
                        <div className="jibun ellipsis">{info.addressName}</div>
                        <div>
                          <a href={info.placeURL} target="_blank" className="link" rel="noreferrer">
                            디테일
                          </a>
                          {placeBasket.includes(info) ? (
                            <button onClick={{}}>삭제</button>
                          ) : (
                            <div>
                              <button onClick={addToBookMark}>추가</button>
                            </div>
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
