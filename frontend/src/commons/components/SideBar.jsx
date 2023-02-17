import { Link } from 'react-router-dom';
import path from '@/config/path.jsx';

const SideBar = () => {
  return (
    <div className="sidebarParent" style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={path.myGroups}>내 그룹 </Link>
      <Link to={path.myTravels}>내 여행 </Link>
      <Link to={path.travelBasket}>장소바구니 </Link>
      <Link to={path.serviceCenter}>고객센터 </Link>
      <Link to={path.notice}>공지사항 </Link>
    </div>
  );
};
export default SideBar;
