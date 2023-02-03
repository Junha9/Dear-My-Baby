import { Link } from 'react-router-dom';
import PlanMap from './PlanMap';

export default function FindCity() {
  return (
    <div>
      <PlanMap />
      <Link to="../place-cart">장소바구니 보러가기</Link>
    </div>
  );
}
