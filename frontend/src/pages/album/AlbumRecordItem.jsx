import { record } from './props';

export default function AlbumRecordItem({ record }) {
  return (
    <ul className="record-box">
      <div className="img-padding">
        <li>
          <img className="img-padding2" src={record.recordFile} alt="random" width="75" height="110"></img>
        </li>
      </div>
      <div className="text-padding">
        <li>recordId : {record.recordId}</li>
        <li>dayCount : {record.dayCount}</li>
        <li>recordType : {record.recordType}</li>
        <li>latitude : {record.lat}</li>
        <li>longitude : {record.lng}</li>
      </div>
    </ul>
  );
}

AlbumRecordItem.propTypes = {
  record,
};
