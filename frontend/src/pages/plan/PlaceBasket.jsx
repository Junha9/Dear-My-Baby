import './plan.css';

export default function PlaceBasket(basketplace) {
  return <div style={{ backgroundColor: 'orange', padding: '3%' }}>{basketplace.basketplace.content}</div>;
}
