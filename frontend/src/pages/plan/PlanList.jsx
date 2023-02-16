import { useState, useEffect, useCallback } from 'react';
import { Navigate } from 'react-router-dom';

import { useMember } from '@/commons/MemberContext';

import { apiGetPlanList } from '@/commons/api/plan';

export default function PlanList() {
  const [familyPlanList, setFamilyPlanList] = useState([]);

  const member = useMember();

  const loadFamilyPlanList = useCallback(
    async function () {
      if (member != null) {
        const newFamilyPlanList = [];
        for (let family of member.familyIdList) {
          const response = await apiGetPlanList(family.familyId);
          const planList = response.data;
          newFamilyPlanList.push({ ...family, planList });
        }
        setFamilyPlanList(newFamilyPlanList);
      }
    },
    [member],
  );

  useEffect(() => {
    loadFamilyPlanList();
  }, []);

  return (
    <>
      {member != null ? (
        <>
          <div>{member.memberName}님 안녕하세요!</div>
          {familyPlanList.map((familyPlan) => (
            <div key={familyPlan.familyId}>
              <div>{familyPlan.familyName}의 계획들</div>
              {familyPlan.planList.length > 0 ? (
                familyPlan.planList.map((plan) => (
                  <div key={plan.planId}>
                    <span>{plan.planName}</span>

                    <ul>
                      <li>{plan.planDestination}</li>
                      <li>{plan.startDate}</li>
                      <li>{plan.endDate}</li>
                      {/* <li>{plan.planLatitude}</li> */}
                      {/* <li>{plan.planLongitude}</li> */}
                      {/* <li>{JSON.stringify(plan.days)}</li> */}
                    </ul>
                  </div>
                ))
              ) : (
                <div>비어있음!</div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div>Not Logged in</div>
      )}
    </>
  );
}
