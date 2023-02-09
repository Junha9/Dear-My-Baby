//명칭,카테고리,이미지URL,주소,위도,경도,개요,잔화번호,주차 시설,영업시간,휴무일,대표메뉴0

const dummyRecommandFoodList = [
  {
    name: 'aaa',
    catagory: 'type',
    imgURL: 'url',
    address: 'string',
    lat: 123.12344,
    lng: 38.1234123,
    outline: 'string',
    phoneNumber: '010-20333-2093',
    parkingLot: true,
    workingTime: 'string',
    closedDay: 'Thursday',
    mainMenu: 'dongas',
  },
  {
    name: 'abb',
    catagory: 'type2',
    imgURL: 'url12',
    address: 'string1',
    lat: 123.1234444,
    lng: 38.1234123,
    outline: 'string',
    phoneNumber: '010-20333-2093',
    parkingLot: true,
    workingTime: 'string',
    closedDay: 'Thursday',
    mainMenu: 'dongas',
  },
  {
    name: 'aaa',
    catagory: 'type3',
    imgURL: 'url213',
    address: 'string2',
    lat: 123.555344,
    lng: 38.443,
    outline: 'string',
    phoneNumber: '010-2043-2093',
    parkingLot: true,
    workingTime: 'string',
    closedDay: 'Thursday',
    mainMenu: 'dongas',
  },
];

const dummyRecommandPlaceList = [
  {
    name: 'aaa',
    catagory: 'type',
    imgURL: 'url',
    address: 'string',
    lat: 123.12344,
    lng: 38.1234123,
    outline: 'string',
    phoneNumber: '010-20333-2093',
    parkingLot: true,
    workingTime: 'string',
    closedDay: 'Thursday',
    mainMenu: 'dongas',
  },
  {
    name: 'abb',
    catagory: 'type2',
    imgURL: 'url12',
    address: 'string1',
    lat: 123.1234444,
    lng: 38.1234123,
    outline: 'string',
    phoneNumber: '010-20333-2093',
    parkingLot: true,
    workingTime: 'string',
    closedDay: 'Thursday',
    mainMenu: 'dongas',
  },
  {
    name: 'aaa',
    catagory: 'type3',
    imgURL: 'url213',
    address: 'string2',
    lat: 123.555344,
    lng: 38.443,
    outline: 'string',
    phoneNumber: '010-2043-2093',
    parkingLot: true,
    workingTime: 'string',
    closedDay: 'Thursday',
    mainMenu: 'dongas',
  },
];

const RecommandItem = () => {
  return (
    <div>
      <h2>Recommand Item</h2>
    </div>
  );
};

export default RecommandItem;
