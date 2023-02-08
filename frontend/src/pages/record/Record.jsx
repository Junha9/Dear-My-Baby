import { Outlet } from 'react-router-dom';
import './Record.css';

const Record = () => {
  return (
    <div className="record">
      <Outlet></Outlet>
    </div>
  );
};

export default Record;
