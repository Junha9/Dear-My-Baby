import { useEffect, useState } from 'react';
import './KidsInformation.css';
import { useNavigate } from 'react-router-dom';

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

export default function KidsInformation() {
  const [food, setFood] = useState([]);
  const [place, setPlace] = useState([]);
  const [festival, setFestival] = useState([]);

  let p = 0;
  let quizAnswer = [
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
  ];
  const [pointer, setPointer] = useState(p);
  const [answer, setAnswer] = useState(quizAnswer);

  console.log(pointer);

  // 다음 문제로 가기
  function toNext() {
    // console.log('tonext', pointer, answer);
    quizAnswer[pointer] = false;
    quizAnswer[pointer + 1] = true;
    // p++;
    setAnswer(quizAnswer);
    setPointer(pointer + 1);
    console.log(pointer);
    // console.log('tonext', pointer, answer);
  }
  // 뒤로가기
  const goBack = () => {
    // console.log('goback', pointer, answer);
    console.log('??????????????????????????', pointer);
    quizAnswer[pointer] = false;
    quizAnswer[pointer - 1] = true;
    // p--;
    setAnswer(quizAnswer);
    setPointer(pointer - 1);
    console.log(pointer);
    // console.log('goback', pointer, answer);
  };

  useEffect(() => {
    console.log('pointer:', pointer, answer);
  });
  return (
    <div className="question">
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[0] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
      <div className={answer[1] ? 'show' : 'noshow'}>
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[2] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[4] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[6] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[8] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[10] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[14] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[16] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================== */}
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div className={answer[20] ? 'show' : 'noshow'}>
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
              // 다음 질문으로 가는 함수
              toNext();
              console.log(pointer);
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
        <h2>두번째 질문</h2>
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
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button>싫어한다</button>
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
      {/* ============================================== */}
    </div>
  );
}
