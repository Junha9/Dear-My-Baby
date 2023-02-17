import { useNavigate } from 'react-router-dom';
import './SelectGroup.css';
const dummyGroup = [
  {
    userId: 1,
    userName: '김',
    groupId: 1,
  },
  {
    userId: 1,
    userName: '김',
    groupId: 2,
  },
  {
    userId: 1,
    userName: '김',
    groupId: 3,
  },
];

const SelectGroup = () => {
  const navigate = useNavigate();
  return (
    <div className="plan-frame" style={{ padding: '3vh', textAlign: 'center' }}>
      <h2 className="fadein-animation">함께 여행하실 그룹을 선택해주세요</h2>
      <div className="select-group-plan-div">
        {dummyGroup.map((group, index) => (
          <button
            className="select-group-button"
            onClick={() => {
              navigate(`/`);
            }}
            key={index}
          >
            그룹 {group.groupId}
          </button>
        ))}

        <button
          className="append-group-button"
          onClick={() => {
            navigate('../user/make-group');
          }}
        >
          {' '}
          새로운 그룹
        </button>
      </div>
      <p> user/ groupCreation 만들기</p>
    </div>
  );
};
export default SelectGroup;
