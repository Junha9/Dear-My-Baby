import { useNavigate } from 'react-router-dom';

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
    <div style={{ padding: '3vh', textAlign: 'center' }}>
      <h2>함께 여행하실 그룹을 선택해주세요</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }} action="#">
        {dummyGroup.map((group, index) => (
          <button
            onClick={() => {
              navigate(`select-date`);
            }}
            key={index}
            style={{ margin: '5px', padding: '3px' }}
          >
            그룹 {group.groupId}
          </button>
        ))}
      </form>
      <button style={{ display: 'flex', flexDirection: 'column' }} onClick={() => {navigate('../user/make-group')}} > 새로운 그룹 생성하기</button>
      <p>  user/ groupCreation 만들기</p>
    </div>
  );
};
export default SelectGroup;
