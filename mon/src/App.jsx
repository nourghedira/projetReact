
import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Header
        title="My React Counter App"
        subtitle="Mastering Fundamental Hooks: useState & useEffect"
      />

      <Counter />
    </div>
  );
}
