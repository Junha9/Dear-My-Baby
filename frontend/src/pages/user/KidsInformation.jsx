import { useEffect, useState } from 'react';
import './KidsInformation.css';
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';

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
  const [food, setFood] = useState([]);
  const [place, setPlace] = useState([]);
  const navigate = useNavigate();
  let quizAnswer = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [pointer, setPointer] = useState(0);
  const [answer, setAnswer] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // 다음 문제로 가기
  function toNext() {
    quizAnswer[pointer] = false;
    quizAnswer[pointer + 1] = true;
    // console.log(quizAnswer);
    setAnswer(quizAnswer);
    setPointer(pointer + 1);
    // console.log('pointer', pointer, 'quizANswer', quizAnswer);
  }
  // 뒤로가기
  const goBack = () => {
    quizAnswer[pointer] = false;
    quizAnswer[pointer - 1] = true;
    setAnswer(quizAnswer);
    setPointer(pointer - 1);
    console.log(pointer);
  };

  return (
    <div className="question">
      <button onClick={() => console.log(place, answer)}>Panic Button</button>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[0] ? 'show' : 'noshow'} style={{ flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ margin: '5%' }}>
          <h2>당신의 아이에 대해 답해주세요</h2>
        </div>
        <img
          src="/assets/sea.png"
          style={{ height: '300px', width: '300px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div className="answer-div" style={{ display: 'flex', width: '70%', justifyContent: 'space-between' }}>
          <button
            // style={{ height: '70px', width: '110px', marginInline: '40px' }}
            style={{ width: '40%', height: '40px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button
            // style={{ height: '70px', width: '110px', marginInline: '40px' }}
            style={{ width: '40%', height: '40px' }}
            onClick={toNext}
          >
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
      {/* ========================= */}
      <div className={answer[1] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>

          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[2] ? 'show' : 'noshow'}>
        <h2>3당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[3] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[4] ? 'show' : 'noshow'}>
        <h2>{pointer}당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[5] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* ```````````````````````````````````````````````````````````````` */}
      <div className={answer[6] ? 'show' : 'noshow'}>
        <h2>6당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[7] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>

          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[8] ? 'show' : 'noshow'}>
        <h2>3당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[9] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[10] ? 'show' : 'noshow'}>
        <h2>{pointer}당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[11] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      <div className={answer[12] ? 'show' : 'noshow'}>
        <h2>당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[13] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>

          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[14] ? 'show' : 'noshow'}>
        <h2>3당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[15] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[16] ? 'show' : 'noshow'}>
        <h2>{pointer}당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[17] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      <div className={answer[18] ? 'show' : 'noshow'}>
        <h2>당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[19] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>

          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[20] ? 'show' : 'noshow'}>
        <h2>3당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[21] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[22] ? 'show' : 'noshow'}>
        <h2>{pointer}당신의 아이에 대해 답해주세요</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      {/* ========================= */}
      <div className={answer[23] ? 'show' : 'noshow'}>
        <h2>{pointer}두번째 질문</h2>
        <img
          src="/assets/sea.png"
          style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}
          alt="questionError"
        ></img>
        <div>
          <button
            style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace([...place, 'mountain']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>싫어한다</button>
          <div>
            <button
              onClick={() => {
                goBack();
                console.log(pointer);
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
