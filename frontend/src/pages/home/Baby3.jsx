import DummyPlaceList from './DummyPlaceList';

const placeList = [
  {
    placeName: '국립중앙박물관 어린이박물관',
    imgUrl:
      'https://ldb-phinf.pstatic.net/20211213_69/1639369516747nsHjE_JPEG/1%BA%CE_%BB%F5%B7%D3%B0%D4_%B0%FC%C2%FB%C7%D8%BF%E4_%C3%A2%C0%DB_%B3%EE%C0%CC%C5%CD_%C3%BC%C7%E8.jpg',
  },
  {
    placeName: '한국잡월드',
    imgUrl:
      'https://ldb-phinf.pstatic.net/20221214_40/1671001920700s28EL_JPEG/%B8%DE%C4%AB%C0%CC%BA%EA%C0%FC%B0%E6.jpg',
  },
  {
    placeName: '오대호아트팩토리',
    imgUrl: 'https://ldb-phinf.pstatic.net/20190513_1/1557699104061w0h9n_JPEG/IS4Sust9ZfDwa32drMKkMD7S.jpg',
  },
  {
    placeName: '런닝맨제주점',
    imgUrl: 'https://ldb-phinf.pstatic.net/20221130_168/1669782904544YcewC_JPEG/IMG_1164.JPG',
  },
  {
    placeName: '키자니아',
    imgUrl: 'https://ldb-phinf.pstatic.net/20190916_33/1568608547742aJ9W2_JPEG/aDV70oqoVB_ZIp-i4-SnoQRN.JPG.jpg',
  },
  {
    placeName: '레고랜드코리아리조트',
    imgUrl: 'https://ldb-phinf.pstatic.net/20221208_251/1670473691778HPSC8_JPEG/DSC06793.jpg',
  },
  {
    placeName: '코엑스아쿠아리움',
    imgUrl: 'https://ldb-phinf.pstatic.net/20220802_96/1659424247571EtyiG_PNG/2109%BD%E6%B3%D7%C0%CF.png',
  },
  {
    placeName: '상하농원',
    imgUrl: 'https://ldb-phinf.pstatic.net/20210614_41/1623639146735An4TY_JPEG/%BC%F6%BF%B5%C0%E5%BB%E7%C1%F8.jpg',
  },
];
export default function Baby3() {
  return (
    <div className="placeList">
      <DummyPlaceList placeList={placeList}></DummyPlaceList>
    </div>
  );
}
