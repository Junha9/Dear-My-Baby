import PlaceList from './PlaceList';

const Place = () => {
  const places = [
    {
      placeId: 1,
      placeName: '헬로키티',
      placeType: '관광명소',
      placeImg: 'https://picsum.photos/200',
      lat: '37.49772884365532',
      lng: '127.04486129289809',
    },
    {
      placeId: 2,
      placeName: '한라산',
      placeType: '관광명소',
      placeImg: 'https://picsum.photos/200',
      lat: '37.49772884365532',
      lng: '127.04486129289809',
    },
    {
      placeId: 3,
      placeName: '한라산',
      placeType: '관광명소',
      placeImg: 'https://picsum.photos/200',
      lat: '37.49772884365532',
      lng: '127.04486129289809',
    },
  ];
  return (
    <div className='placeList'>
      <PlaceList places={places}></PlaceList>
    </div>
  );
}

export default Place;
