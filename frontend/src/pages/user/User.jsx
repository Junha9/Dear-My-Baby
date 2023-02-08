import Login from './Login';
import SignUp from './SignUp';
import { Outlet } from 'react-router-dom';

export default function User() {
  const dummyChildFavor = [
    {
      // 음식, 관광지
      familyID: 1,
      childName: '김도현',
      childAge: 3,
      food: [],
      place: [],
    },
  ];

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}
