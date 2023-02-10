import { useLocation, useOutletContext } from 'react-router-dom';

const RecommendFoodDetail = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const foodId = params.get('food-id');

  const [foodList, placeList] = useOutletContext();

  let food = null;
  for (let i = 0; i < foodList.length; i++) {
    if (foodList[i].id == foodId) {
      food = foodList[i];
    }
  }

  return (
    <div>
      <h2>RecommendFoodDetail</h2>
      <p>{foodId}</p>
      <p>{food != null && JSON.stringify(food)}</p>
    </div>
  );
};
export default RecommendFoodDetail;
