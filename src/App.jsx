import React from 'react';
import { Arena } from './Components/arena';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="container">
      <h1 className="Head">Крестики-Нолики</h1>
      <Header />
      <Arena />
    </div>
  );
}

export default App;
