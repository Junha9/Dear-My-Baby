import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PlanMap from './PlanMap';

import { apiGetPlan } from '@/commons/api/plan';

export default function FindCity() {
  const [plan, setPlan] = useState(null);
  const { planId } = useParams();

  useEffect(() => {
    // url 경로에서 계획의 id를 얻는다
    apiGetPlan(planId).then(({ data }) => setPlan(data));
  }, []);

  return (
    <div>
      {/* <button onClick={() => console.log(plan)}>panic</button> */}
      <PlanMap plan={plan} />
    </div>
  );
}
