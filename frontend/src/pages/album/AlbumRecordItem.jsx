import { record } from './props';

export default function AlbumRecordItem({ record }) {
  return (
    <ul>
      <li>recordId : {record.recordId}</li>
      <li>dayCount : {record.dayCount}</li>
      <li>recordType : {record.recordType}</li>
      <li>latitude : {record.lat}</li>
      <li>longitude : {record.lng}</li>
      <li>
        <img src={record.recordFile} alt="random"></img>
      </li>
    </ul>
  );
}

AlbumRecordItem.propTypes = {
  record,
};
