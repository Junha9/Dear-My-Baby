/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import { apiCreateRecord } from '@/commons/api/record';
import { margin } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import styled from 'styled-components';

const RecordUpload = ({ currentDayId, currentLat, currentLng, setNowRecords, setModalOpen }) => {
  const navigate = useNavigate();
  const [source, setSource] = useState('');
  const [recordText, setRecordText] = useState('');
  const [recordTitle, setRecordTitle] = useState('');
  const recordFile = source ? source.url : 'string';
  const record = {
    dayId: currentDayId,
    recordText: recordText,
    recordName: recordTitle,
    latitude: currentLat.toString(),
    longitude: currentLng.toString(),
    recordType: source.video ? 1 : 0,
  };

  console.log({ record: record, recordFile: recordFile });

  const inputRef = React.useRef();

  const handleFileChange = (e) => {
    // const file = event.target.files[0]
    const imageType = e.target.files[0].type.includes('image');
    const videoType = e.target.files[0].type.includes('video');

    setSource({
      url: e.target.files[0],
      // url: URL.createObjectURL(e.target.files[0]),
      image: imageType,
      video: videoType,
    });
    // console.log(videoType, imageType);
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
    // console.log(record, recordFile);
    // console.log(source ? source.image : 'no');
    if (recordFile != null) {
      const createRecord = async () => {
        const response = await apiCreateRecord(record, recordFile);
        setNowRecords(response.data);
        alert('발자국이 찍혔습니다!');
        setModalOpen(false);
      };
      createRecord();
      // window.location.reload();
    } else {
      alert('영상 혹은 사진 기록을 남겨주세요!');
    }
  };

  const onChange = (e) => {
    setRecordText(e.target.value);
  };

  const onChangeTitle = (e) => {
    setRecordTitle(e.target.value);
  };

  return (
    <div className="RecordUpload">
      {source != null && source.image && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input className="upload-input upload-title" type="text" placeholder="제목" onChange={onChangeTitle}></input>
          <img style={{ height: '100%', width: '100%' }} src={URL.createObjectURL(source.url)} alt="uploaded img" />
        </div>
      )}

      {source != null && source.video && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input className="upload-input upload-title" type="text" placeholder="제목" onChange={onChangeTitle}></input>
          <video
            style={{ height: '100%', width: '100%', marginBottom: '10%' }}
            src={URL.createObjectURL(source.url)}
            controls
            alt="uploaded video"
          />
        </div>
      )}
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
