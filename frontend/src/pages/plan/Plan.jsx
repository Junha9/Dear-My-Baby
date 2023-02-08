import { Outlet } from 'react-router-dom';
import './plan.css';

export default function Plan() {
  return (
    <div className="planFrame">
      <Outlet></Outlet>
    </div>
  );
}
