import { useState } from "react";
import { useNavigate } from "react-router-dom";
// const
const RecommandFoodList = (data) => {
  const fooditem = data.data
  const position = [
    {
      lat: fooditem.lat,
      lng: fooditem.lng
    }
  ]
  console.log(fooditem)
  return (
    <div>

      <div className="recommand-item">
        {/* 소개 부분에 보여 줄 데이터 */}
        <img src={fooditem.imgURL} width="250vw" alt="Restaurant image" />
        <p>{fooditem.name}</p>
        <p>{fooditem.category}</p>
        <p>{fooditem.imgUrl}</p>
        {/* 상세보기 페이지 만들어서 데이터 props 해주기 라우터 어렵다.*/}
        {/* <button onClick={navigator('../recommand-item/recommand-detail')}>상세보기</button> */}
      </div>
      <hr />

      {/* 디테일에 보여줄 데이터 필요하면, 새로운 컴포넌트 만들거임 */}
      {fooditem.address}
      {fooditem.phoneNumber}
      {fooditem.outline}
      {fooditem.workingTime}

      {/* reccomandFood list */}
    </div>
  )
}

export default RecommandFoodList;