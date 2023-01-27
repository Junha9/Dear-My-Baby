import { useState } from 'react';
import Logo from '@/commons/components/logo';
import './home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Logo></Logo>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default Home;