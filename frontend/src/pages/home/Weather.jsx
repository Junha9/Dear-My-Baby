import PlaceList from './PlaceList';

const Weather = () => {
  const places = [
    {
      placeName: '서울랜드눈썰매장',
      imgUrl: 'https://lh3.googleusercontent.com/p/AF1QipPr757fxbFycG82ZeoJydZVwUKFSsesgCuQoAtQ=s1360-w1360-h1020',
    },
    {
      placeName: '곤지암스키장',
      imgUrl: 'https://lh5.googleusercontent.com/p/AF1QipPmruQPhbUQz4yhRyvcw_E8aOklCo_9M6ayPlfy=w325-h218-n-k-no',
    },
    {
      placeName: '지산포레스트리조트',
      imgUrl: 'https://lh3.googleusercontent.com/p/AF1QipP9uUzFmqvkr8feycL3JXk21urlnVRSEgHF9saZ=s1360-w1360-h1020',
    },
    {
      placeName: '잠원한강공원 눈썰매장',
      imgUrl: 'https://lh5.googleusercontent.com/p/AF1QipM-4rgxP0HG29AXZe0ZMND8RsbKxOx_69W6njTf=w325-h218-n-k-no',
    },
    {
      placeName: '어린이회관 눈썰매장',
      imgUrl: 'https://lh3.googleusercontent.com/p/AF1QipNX3gX_GKZ8liIWvfAhkA8Q7R0gCYKINYKKVjw1=s1360-w1360-h1020',
    },
    {
      placeName: '스플라스리솜',
      imgUrl: 'https://ldb-phinf.pstatic.net/20220902_249/1662074785958kBkij_JPEG/%3B%3B%3B%3B%3B.jpg',
    },
    {
      placeName: '캐리비안베이',
      imgUrl: 'https://ldb-phinf.pstatic.net/20210528_103/1622190997707y48Yn_JPEG/KakaoTalk_20200715_175112971_16.jpg',
    },
    {
      placeName: '아산 스파비스',
      imgUrl: 'https://ldb-phinf.pstatic.net/20230207_96/1675745057954TWxmb_JPEG/%BD%C7%BF%DC%BF%C2%C3%B5%C7%AE.jpg',
    },
  ];

  return (
    <div className="placeList">
      <PlaceList places={places}></PlaceList>
    </div>
  );
};

export default Weather;
