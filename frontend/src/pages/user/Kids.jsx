import { useState } from 'react';
import { Outlet } from 'react-router-dom';
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

export default function Kids() {
  const [food, setFood] = useState(dummyChildFavor[0].food);

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}
