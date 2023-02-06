import React, { useState } from "react"
import styled from "styled-components"



const RecordUpload = () => {
  const [source, setSource] = useState()
  const inputRef = React.useRef();

  const handleFileChange = (e) => {
    // const file = event.target.files[0]
    const imageType = e.target.files[0].type.includes('image');
    const videoType = e.target.files[0].type.includes('video');

    setSource({
      url: URL.createObjectURL(e.target.files[0]),
      image: imageType,
      video: videoType
    })
    console.log(videoType, imageType)


  }

  const handleChoose = (e) => {
    inputRef.current.click()
  }
  return (
    <div className="RecordUpload">
      {source && source.image ? <img src={source.url} alt="uploaded img" /> : <video src={source} alt="uploaded video" />}
      <input
        ref={inputRef}
        type="file"
        className="Record_input"
        onChange={handleFileChange}
      />
      {/* 파일을 올리면 미리보기 생성하기 */}


      <div>
        {!source ? <button onClick={handleChoose}>기록 남기기 </button> : <button onClick={handleChoose}>다시선택하기 </button>}
      </div>



    </div>
  )
}

export default RecordUpload;