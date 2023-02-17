import { useParams } from 'react-router-dom';
import PlaceCart from './PlaceCart';
import { useEffect, useState } from 'react';
import { apiGetPlan } from '@/commons/api/plan';

export default function PlaceCartParent() {
  // url 경로에서 계획의 id를 얻는다
  const { planId } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    // url 경로에서 계획의 id를 얻는다
    apiGetPlan(planId).then(({ data }) => {
      setPlan(data);
    });
  }, []);

  return (
    <div>
      <PlaceCart plan={plan} />
    </div>
  );
}
