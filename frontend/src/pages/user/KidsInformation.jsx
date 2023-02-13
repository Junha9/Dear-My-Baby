import { useEffect, useState } from 'react';
import './KidsInformation.css';
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';
import questionList from './KidData.json';

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

  const handleYes = () => {
    const categoryId = question.categoryId;
    if (question.type == 'place') {
      if (!placeList.includes(categoryId)) {
        setPlaceList([...placeList, categoryId]);
      }
    } else if (question.type == 'food') {
      if (!foodList.includes(categoryId)) {
        setFoodList([...foodList, categoryId]);
      }
    }
    setIndex(index + 1);
  };

  const handleNo = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <div className="question">
        <button style={{ position: 'absolute' }} onClick={() => console.log(placeList, foodList)}>
          Panic Button
        </button>
        {index < questionList.length ? (
          <div>
            <div style={{ position: 'absolute' }}>
              <div style={{ marginBlock: '27%', padding: '15%' }}>
                <h2 style={{ fontSize: '2.4rem' }}>{question.categoryName}</h2>
              </div>

              <div className="answer-div" style={{ display: 'flex', width: '70%', justifyContent: 'space-between' }}>
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
          navigate('/')
        )}

        {/* className={answer[0] ? 'show' : 'noshow'} */}
        {/* ========================= */}
      </div>
    </>
  );
}
