import { getApiInstance } from './http';
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

// day별 기록 저장
export async function apiCreateRecord(record, recordFile) {
  console.log(record, recordFile);
  if (record != null && recordFile != null) {
    const formData = new FormData();
    formData.append(
      'recordDto',
      new Blob([JSON.stringify(record)], {
        type: 'application/json',
      }),
    );
    formData.append('multipartFile', recordFile);

    console.log(formData);
    const response = await api.post(`/record`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    return response;
  }
  throw new Error('apiCreateRecord : record, recordFile must be provided');
}

// 날짜별 여행 기록 전체 조회
export async function apiGetRecordList(dayId, planId) {
  if (dayId != null && planId != null) {
    const response = await api.get(`/record/day?dayId=${dayId}&planId=${planId}`);
    return response;
  }
  throw new Error('apiGetRecordList : dayId and planId must be provided');
}
