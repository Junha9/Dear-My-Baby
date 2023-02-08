import { getApiInstance } from './http';
import axios from 'axios';
// 날짜별 여행 기록 전체 조회
const dummyRecords = [
  {
    recordId: 1,
    dayId: 1,
    recordFile: 'string',
    latitude: 'string',
    longitude: 'string',
    recordType: 0,
    fileUrl: 'string',
    recordDate: '2023-02-06T10:44:59.097Z',
  },
];

const api = getApiInstance();

export async function apiCreateRecord(record, recordFile) {
  if (record != null && recordFile != null) {
    const formData = new FormData();
    formData.append(
      'recordDto',
      new Blob([JSON.stringify(record)], {
        type: 'application/json',
      }),
    );
    formData.append('multipartFile', recordFile);

    console.log(record, recordFile);
    await axios({
      method: 'POST',
      url: 'https://i8a206.p.ssafy.io/api/record',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => console.log(e));
    // console.log(response);
  }
}
