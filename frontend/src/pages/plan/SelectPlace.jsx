import { Link } from 'react-router-dom';
import path from '@/config/path';
const SelectPlace = () => {
  return (
    <div className="plan-frame" style={{padding: '3vh'}}>
      <h2>여행하실 지역을 선택해주세요</h2>
      <form action="#" className="regionButtons">
        {/* onclick 해당 도시를 검색어로 입력 해서 그 도시 지도를 가지고 오는 함수 짜기 */}
        <li>
          <Link to={path.planFindCity}>부산</Link>
        </li>
        <li>
          <Link to={path.planFindCity}>제주</Link>
        </li>
        <li>
          <Link to={path.planFindCity}>인천</Link>
        </li>
        <li>
          <Link to={path.planFindCity}>대구</Link>
        </li>
        <li>
          <Link to={path.planFindCity}>울산</Link>
        </li>
      </form>
    </div>
  );
};
export default SelectPlace;
