/* eslint-disable jsx-a11y/media-has-caption */
import { record } from './props';

export default function AlbumRecordItem({ record }) {
  return (
    <ul className="record-box">
      <h1 style={{ marginTop: '3%', paddingLeft: '5%' }}>{record.recordName}</h1>
      <div className="img-padding">
        <li>
          {record.recordType == 0 ? (
            <img src={record.fileUrl} alt="random" width="300" height="200"></img>
          ) : (
            <video src={record.fileUrl} controls width="300" height="200"></video>
          )}
        </li>
      </div>
      <div
        className="record-box"
        style={{
          margin: '4%',
          borderRadius: '10px',
        }}
      >
        {record.recordText}
      </div>
    </ul>
  );
}

AlbumRecordItem.propTypes = {
  record,
};
