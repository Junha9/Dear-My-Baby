import DummyPlaceList from './DummyPlaceList';

const Baby = () => {
  const placeList = [
    {
      placeName: '포레스트리솜',
      imgUrl: 'https://ldb-phinf.pstatic.net/20200221_111/1582268200689KuL3U_JPEG/na5MRQEa-8fH7s7tXeLYpFyf.jpg',
    },
    {
      placeName: '서울어린이대공원동물원',
      imgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTE0%2FMDAxNTI0NjM0MjE3MzI4.nDfUJh1SsH262uLGSbLlxufE1F_Q9UA6736sYZjxBGwg.D-TJgL3pyNGiYVEOPj20P4zoPRF8HdwzuvJwLiA-bCUg.JPEG.mediahongil%2FIMG_8859.JPG',
    },
    {
      placeName: '쏠비치 삼척 ',
      imgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTE0%2FMDAxNTI0NjM0MjE3MzI4.nDfUJh1SsH262uLGSbLlxufE1F_Q9UA6736sYZjxBGwg.D-TJgL3pyNGiYVEOPj20P4zoPRF8HdwzuvJwLiA-bCUg.JPEG.mediahongil%2FIMG_8859.JPG',
    },
    {
      placeName: '스플라스리솜',
      imgUrl: 'https://ldb-phinf.pstatic.net/20220902_249/1662074785958kBkij_JPEG/%3B%3B%3B%3B%3B.jpg',
    },
    {
      placeName: '아산 스파비스',
      imgUrl: 'https://ldb-phinf.pstatic.net/20230207_96/1675745057954TWxmb_JPEG/%BD%C7%BF%DC%BF%C2%C3%B5%C7%AE.jpg',
    },
    {
      placeName: '나무그림',
      imgUrl:
        'https://pup-review-phinf.pstatic.net/MjAyMzAxMTdfMjQ4/MDAxNjczOTQ0NzczOTc5.ilAPymVGDyzhFm0cUYu8AhWyvu_kvTb_k12zH1JNmBsg.TPiqjXPnlIdSyO4G4_1z6ZWsxl6WoTsQzraxNvtcKvog.JPEG/232EA20E-E16F-4AD3-A628-44A36031EA1B.jpeg',
    },
    {
      placeName: '대관령아기동물농장',
      imgUrl: 'https://ldb-phinf.pstatic.net/20170705_98/1499232485062sqGf1_JPEG/186655545824898_2.jpeg',
    },
  ];

  return (
    <div className="placeList">
      <DummyPlaceList placeList={placeList}></DummyPlaceList>
    </div>
  );
};

export default Baby;
