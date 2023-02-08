import { getApiInstance } from './http';
import axios from 'axios';
const api = getApiInstance();

export async function apiCreatePlan(data) {
  // const data = {
  //   familyId: 211,
  //   planName: '제주제주',
  //   planDestination: '어디냐',
  //   startDate: '2023-02-07',
  //   endDate: '2023-02-22',
  // }
  // if (familyId != null) {
  //   const response = api.post(
  //     `/plan/new`,
  //     // JSON.stringify(data),
  //     data,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     },
  //   );
  //   console.log(response);
  //   return response;
  // }
  // throw new Error('apiCheckMember : memberId must be provided');
  await axios({
    method: 'POST',
    url: 'https://i8a206.p.ssafy.io/api/plan/new',
    data: {
      // familyId: 211,
      // planName: '제주제주',
      // planDestination: '어디냐',
      // startDate: '2023-02-07',
      // endDate: '2023-02-22',
      data
    },
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
}

export async function apiGetPlans(data) {
  await axios({
    method: 'POST',
    url: 'https://i8a206.p.ssafy.io/api/plan/new',
    data: {
      // familyId: 211,
      // planName: '제주제주',
      // planDestination: '어디냐',
      // startDate: '2023-02-07',
      // endDate: '2023-02-22',
      data
    },
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
}
