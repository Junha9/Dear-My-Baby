import { getApiInstance } from './http';
import axios from 'axios';

const api = getApiInstance();

export async function apiCreateFamily(memberId, familyName) {
  // return { memberId, familyName };
  await axios({
    method: 'POST',
    url: 'https://i8a206.p.ssafy.io/api/family/new',
    data: {
      familyName: familyName,
      memberId: memberId,
    },
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
}
