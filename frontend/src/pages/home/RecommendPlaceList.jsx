const RecommendPlaceList = (item) => {
  const placeitem = item.data;

  return (
    <div className="recommendList">
      <div className="food-item">
        <div className="food-info">
          <h4>{placeitem.name}</h4>
          <div className="food-info-outline">
            <p className="outline-ptag">설명:{placeitem.outline}</p>
          </div>
          <div className="food-catagory">
            <p>{placeitem.catagory}</p>
          </div>
        </div>
        <div className="food-img">
          <img src={placeitem.imgUrl} alt="restaurant" className="food-src" />
        </div>
        {/* 소개 부분에 보여 줄 데이터 */}
        {/* 상세보기 페이지 만들어서 데이터 props 해주기 라우터 어렵다.*/}
        {/* <button onClick={navigator('../recommand-item/recommand-detail')}>상세보기</button> */}
      </div>

      {/* 디테일에 보여줄 데이터 필요하면, 새로운 컴포넌트 만들거임 */}

      {/* reccomandFood list */}
    </div>
  );
};

export default RecommendPlaceList;
