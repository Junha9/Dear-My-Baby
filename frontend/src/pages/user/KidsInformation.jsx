import { useEffect, useState } from 'react';
import './KidsInformation.css';
import { useNavigate } from 'react-router-dom';
import questionList from './KidData.json';
import { apiCreateBaby, apiGetBabyList, apiUpdateBaby } from '@/commons/api/baby';

const dummyChildFavor = [
  {
    // 음식, 관광지
    familyID: 1,
    childName: '김도현',
    childAge: 3,
    food: [],
    place: [],
    festival: [],
  },
];

const qNum = [...new Array(2)].map((_, i) => i + 1);
export default function KidsInformation() {
  const [index, setIndex] = useState(0);
  const [placeList, setPlaceList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const navigate = useNavigate();
  const question = questionList[index];
  const familyId = window.localStorage.getItem('familyId');
  const [babyId, setBabyId] = useState(0);
  // const [babyData, setBabyData] = useState({});

  // baby 정보 API get
  let babyData = {
    familyId: 0,
    favoriteSpot: [],
    favoriteFood: [],
  };

  // useEffect(() => {
  //   // console.log(familyId);
  //   async () => {
  //     const response = await apiGetBabyList(familyId);
  //     setBabyId(response.data[0].babyId);
  //   };
  // });

  const handleYes = () => {
    const categoryId = question.categoryId;
    if (question.type == 'place') {
      if (!placeList.includes(categoryId)) {
        setPlaceList([...placeList, categoryId.toString()]);
      }
    } else if (question.type == 'food') {
      if (!foodList.includes(categoryId)) {
        setFoodList([...foodList, categoryId.toString()]);
      }
    }
    setIndex(index + 1);
  };

  const handleNo = () => {
    setIndex(index + 1);
  };

  // 아이 선호정보 입력하는 함수 + 홈으로 돌아가기
  const postKidFavorInfo = async () => {
    const res = await apiGetBabyList(familyId);
    const newBabyId = res.data[0].babyId;
    setBabyId(newBabyId);
    babyData.familyId = familyId;
    babyData.favoriteFood = foodList;
    babyData.favoriteSpot = placeList;
    console.log('보내기전 최종', babyData);
    apiUpdateBaby(babyData, newBabyId);

    navigate('/');
  };

  return (
    <>
      <div className="question" style={{ backgroundColor: 'rgb(175, 140, 231)' }}>
        {/* <button style={{ position: 'absolute' }} onClick={() => console.log(babyId)}>
          Panic Button
        </button> */}
        {index < questionList.length ? (
          <div style={{ width: '450px', height: '900px' }}>
            <div
              style={{
                position: 'absolute',
                width: '100vw',
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
              }}
            >
              <div style={{ marginBlock: '27%', padding: '15%' }}>
                <h2 style={{ fontSize: '2.4rem' }}>{question.categoryName}</h2>
              </div>

              <div
                className="answer-div"
                style={{ display: 'flex', width: '70%', justifyContent: 'space-between', alignSelf: 'center' }}
              >
                <button className="kidinfo-button" onClick={handleYes}>
                  좋아한다
                </button>
                {/* // 다음 질문로 넘어가는 함수 */}
                <button className="kidinfo-button" onClick={handleNo}>
                  싫어한다
                </button>
              </div>
              <div className="go-back">
                <button
                  style={{ backgroundColor: 'white', color: 'blue', border: 'blue' }}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  뒤로
                </button>
              </div>
            </div>
            <img src={question.imgUrl} style={{ height: '100%', width: '100%' }} alt="questionError"></img>
          </div>
        ) : (
          // <div>질문이 다 끝났다</div>
          <div style={{ paddingBlock: '30%', width: '100%' }}>
            <h1>응답 해주셔서 감사합니다.</h1>
            <button
              onClick={() => {
                console.log(babyData);
                postKidFavorInfo();
              }}
            >
              홈으로 가기
            </button>
          </div>
        )}

        {/* className={answer[0] ? 'show' : 'noshow'} */}
        {/* ========================= */}
      </div>
    </>
  );
}
