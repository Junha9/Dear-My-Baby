import '@/App.css';
import { Outlet } from 'react-router-dom';
import HeadBar from '@/commons/components/HeadBar';

export default function App() {
  return (
    <div className="App">
      <HeadBar></HeadBar>
      <Outlet></Outlet>
    </div>
  );
}
