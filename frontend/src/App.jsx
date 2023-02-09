import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import '@/App.css';
import { MemberProvider } from '@/commons/MemberContext';
import HeadBar from '@/commons/components/HeadBar';

export default function App() {
  return (
    <div className="App">
      <MemberProvider>
        <HeadBar></HeadBar>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet></Outlet>
        </Suspense>
      </MemberProvider>
    </div>
  );
}
