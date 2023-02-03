import { Outlet } from 'react-router-dom';

export default function Album() {
  return (
    <div id="album">
      <Outlet></Outlet>
    </div>
  );
}
