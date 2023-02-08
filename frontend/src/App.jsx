import { Suspense } from 'react';
import '@/App.css';
import { Outlet } from 'react-router-dom';
import HeadBar from '@/commons/components/HeadBar';

export default function App() {
  return (
    <div className="App">
      <HeadBar></HeadBar>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
}
