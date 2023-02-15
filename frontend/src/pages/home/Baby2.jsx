import DummyPlaceList from './DummyPlaceList';

const Baby2 = () => {
  const placeList = [
    {
      placeName: '유아숲체험장',
      imgUrl: 'https://ldb-phinf.pstatic.net/20180409_60/1523268884023S6fXm_JPEG/ylrIFiIT3gnxpW0uP01eHdQa.jpg',
    },
    {
      placeName: '키즈호텔 상상플레이',
      imgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MThfMjg0%2FMDAxNjUwMjY5MDg4MTgy.-6U88octgI5kHCn5feoE5hZcs3Bv4ciimYvPOlUn-x0g.642hl8ENIbGKmw9-JwgsZRhCRmlvqxs1Hh3ps__Vor0g.JPEG.wjpotato%2Foutput_1694316261.jpg',
    },
    {
      placeName: '에코랜드테마파크',
      imgUrl: 'https://ldb-phinf.pstatic.net/20221223_122/1671783055577W116K_JPEG/1242t.jpg',
    },
    {
      placeName: '소인국 테마파크',
      imgUrl:
        'https://naverbooking-phinf.pstatic.net/20220826_238/1661503496053Er1hh_JPEG/%BC%D2%C0%CE%B1%B9%C5%D7%B8%B6%C6%C4%C5%A9.jpg',
    },
    {
      placeName: '리틀프린스뮤지엄',
      imgUrl:
        'https://ldb-phinf.pstatic.net/20230208_92/1675845757736BqN6B_JPEG/%B8%AE%C6%B2%C7%C1%B8%B0%BD%BA%B9%C2%C1%F6%BE%F6_%282%29.jpg',
    },
    {
      placeName: '서울어린이대공원',
      imgUrl: 'https://ldb-phinf.pstatic.net/20150901_33/14410395901705VHYR_JPEG/11796387_1.jpg',
    },
    {
      placeName: '남산서울타워',
      imgUrl: 'https://ldb-phinf.pstatic.net/20190711_62/1562823704121InE2t_JPEG/usfc9L8iEAQfjJK8oKoBwa4d.jpg',
    },
  ];

  return (
    <div className="placeList">
      <DummyPlaceList placeList={placeList}></DummyPlaceList>
    </div>
  );
};

export default Baby2;
