import { apiGetFamily } from "../api/family";

const MyGroups = () => {
  return (
    <div>
      <h2>MyGroups</h2>
      <button
        onClick={() => {
          apiGetFamily(210);
        }}
      >
        가족 정보 조회
      </button>
    </div>
  );
};

export default MyGroups;
