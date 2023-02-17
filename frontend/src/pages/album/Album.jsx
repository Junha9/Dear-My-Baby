import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './Album.css';
import { useMember } from '@/commons/MemberContext';

export default function Album() {
  const member = useMember();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (member == null) {
  //     navigate('/');
  //   }
  // }, [member]);

  return (
    <div className="album-main" id="album">
      <Outlet></Outlet>
    </div>
  );
}
