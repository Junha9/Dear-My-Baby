import { apiCreateRecord } from '@/commons/api/record';
import React, { useState } from 'react';
// import styled from 'styled-components';

const RecordUpload = (recordLocation) => {
  const [source, setSource] = useState();
  const [recordText, setRecordText] = useState('');

  const record = source ? source.url : 'string';
  const recordFile = {
    dayId: 0,
    recordText: recordText,
    latitude: recordLocation.recordLocation.center.lat,
    longitude: recordLocation.recordLocation.center.lng,
    recordType: 0,
  };

  const inputRef = React.useRef();

  const handleFileChange = (e) => {
    // const file = event.target.files[0]
    const imageType = e.target.files[0].type.includes('image');
    const videoType = e.target.files[0].type.includes('video');

    setSource({
      url: URL.createObjectURL(e.target.files[0]),
      image: imageType,
      video: videoType,
    });
    console.log(videoType, imageType);
  };

  const handleChoose = (e) => {
    inputRef.current.click();
  };

  const saveRecord = (e) => {
    e.preventDefault();
    // 기록 저장하는 post 요청
    // formData.multipartFile = source.url;
    // formData.recordDto.dayId = 1;
    // formData.recordDto.recordFile = 1;
    // formData.recordDto.recordText = 1;
    // formData.recordDto.latitude = 1;
    // formData.recordDto.longitude = recordLocation.formData.recordDto.recordType = 0;
    // console.log(formData);
    // apiCreateRecord(record, recordFile);
  };

  const onChange = (e) => {
    setRecordText(e.target.value);
  };

  console.log(source);
  return (
    <div className="RecordUpload">
      {source != null &&
        (source.image ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input className="upload-input upload-title" type="text" placeholder="제목"></input>
            <img style={{ height: '260px', width: '20px' }} src={source.url} alt="uploaded img" />
          </div>
        ) : (
          <div>
            <input className="upload-input upload-title" type="text" placeholder="제목"></input>
            <video src={source.url} alt="uploaded video" />
          </div>
        ))}
      <input
        ref={inputRef}
        type="file"
        className="record-input"
        onChange={handleFileChange}
        accept="image/*, video/*"
      />
      {/* 파일을 올리면 미리보기 생성하기 */}

      <div>
        {!source ? (
          <button onClick={handleChoose}>기록 남기기</button>
        ) : (
          <div>
            <form action="#" style={{ display: 'flex', flexDirection: 'column' }}>
              <textarea className="upload-input" style={{ marginBottom: '10%', height: '100px' }} onChange={onChange} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="recording-btn" onClick={handleChoose}>
                  다시선택하기
                </button>
                <input type="submit" className="upload-btn" value="업로드" onClick={saveRecord} />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordUpload;
