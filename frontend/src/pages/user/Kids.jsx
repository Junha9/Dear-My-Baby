import { useState } from 'react';

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
      <h1>About Kids</h1>
      <button
        onClick={() => {
          setFood(food.push('햄버거'));
          console.log(food);
        }}
      >
        바꿔
      </button>
      <div>{food.length}</div>
    </div>
  );
}
