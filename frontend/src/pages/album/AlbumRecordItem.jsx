/* eslint-disable jsx-a11y/media-has-caption */
import { record } from './props';

export default function AlbumRecordItem({ record }) {
  return (
    <ul className="record-box">
      <div className="img-padding">
        <li>
          {record.recordType == 0 ? (
            <img className="img-padding2" src={record.fileUrl} alt="random" width="75" height="110"></img>
          ) : (
            <video src={record.fileUrl} controls width="300" height="200"></video>
          )}
        </li>
      </div>
      <div className="text-padding">
        <li>recordId : {record.recordId}</li>
        <li>recordName : {record.recordName}</li>
        <li>recordText : {record.recordText}</li>
        <li>latitude : {record.latitude}</li>
        <li>longitude : {record.longitude}</li>
        <li>recordType : {record.recordType}</li>
        <li>recordDate : {record.recordDate}</li>
      </div>
    </ul>
  );
}

AlbumRecordItem.propTypes = {
  record,
};
