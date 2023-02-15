import DummyPlaceList from './DummyPlaceList';

const Man = () => {
  const placeList = [
    {
      placeName: '리틀프린스뮤지엄',
      imgUrl:
        'https://ldb-phinf.pstatic.net/20230208_92/1675845757736BqN6B_JPEG/%B8%AE%C6%B2%C7%C1%B8%B0%BD%BA%B9%C2%C1%F6%BE%F6_%282%29.jpg',
    },
    {
      placeName: '도치돌알파카목장',
      imgUrl:
        'https://pup-review-phinf.pstatic.net/MjAyMzAyMDhfNzAg/MDAxNjc1ODUwNzA0ODg2.98aEmR6AnRi6reuVTlwMUxMPPAgOex6vVcZyf3HZV3Ig.kXl_rK6Iwoulg0UR-4TlnaPF5ZEQZdUZhN-pN6UsnXQg.JPEG/8D81DEC7-FD84-4EEB-8A1F-26789FDF9510.jpeg',
    },
    {
      placeName: '크라운해태 키즈뮤지엄',
      imgUrl: 'https://ldb-phinf.pstatic.net/20220421_34/1650526796379hbtgX_JPEG/banner.jpg',
    },
    {
      placeName: '피규어뮤지엄제주',
      imgUrl: 'https://ldb-phinf.pstatic.net/20200406_127/1586150952892RQqjm_JPEG/PZhafrg0WkxBE8AHxCt9nVh3.jpg',
    },
    {
      placeName: '런닝맨제주점',
      imgUrl: 'https://ldb-phinf.pstatic.net/20221130_168/1669782904544YcewC_JPEG/IMG_1164.JPG',
    },
    {
      placeName: '레고랜드코리아리조트',
      imgUrl: 'https://ldb-phinf.pstatic.net/20221208_251/1670473691778HPSC8_JPEG/DSC06793.jpg',
    },
    {
      placeName: '여주곤충박물관 ',
      imgUrl: 'https://ldb-phinf.pstatic.net/20210604_251/1622794330946Nw8LV_JPEG/1242-816.jpg',
    },
  ];

  return (
    <div className="placeList">
      <DummyPlaceList placeList={placeList}></DummyPlaceList>
    </div>
  );
};

export default Man;
