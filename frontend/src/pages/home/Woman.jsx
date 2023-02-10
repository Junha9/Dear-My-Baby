import PlaceList from './PlaceList';

const Woman = () => {
  const places = [
    {
      placeName: '헬로키티아일랜드',
      imgUrl:
        'https://ldb-phinf.pstatic.net/20191002_105/1569995954158Vh4Kl_JPEG/%BD%C3%BC%B3%B9%B0%C0%CC%B9%CC%C1%F61.jpg',
    },
    {
      placeName: '스카이밀크팜',
      imgUrl: 'https://ldb-phinf.pstatic.net/20221230_132/1672369873747pyHdV_JPEG/2023%B3%E2_%C8%DE%C0%E5.jpg',
    },
    {
      placeName: '산토끼노래동산',
      imgUrl: 'https://ldb-phinf.pstatic.net/20220402_33/1648887217132F0Jqx_JPEG/KakaoTalk_20220402_170831341.jpg',
    },
    {
      placeName: '임실치즈테마파크 ',
      imgUrl: 'https://ldb-phinf.pstatic.net/20201204_261/16070434649871zdiP_JPEG/M1vPDhG7G3IPr-PgHw8NcPaM.jpg',
    },
    {
      placeName: '상하농원',
      imgUrl: 'https://ldb-phinf.pstatic.net/20210614_41/1623639146735An4TY_JPEG/%BC%F6%BF%B5%C0%E5%BB%E7%C1%F8.jpg',
    },
    {
      placeName: '서울상상나라 ',
      imgUrl: 'https://ldb-phinf.pstatic.net/20221026_169/166675052564336rdS_JPEG/249F8030.jpg',
    },
    {
      placeName: '서울 강남 고마워토토',
      imgUrl: 'https://ldb-phinf.pstatic.net/20220104_29/1641281591512AmsIW_JPEG/KakaoTalk_20220104_115307244.jpg',
    },
    {
      placeName: '스노우폴하우스',
      imgUrl: 'https://ldb-phinf.pstatic.net/20220915_176/1663174832384ymy7z_JPEG/KakaoTalk_20220915_020013134.jpg',
    },
  ];

  return (
    <div className="placeList">
      <PlaceList places={places}></PlaceList>
    </div>
  );
};

export default Woman;
