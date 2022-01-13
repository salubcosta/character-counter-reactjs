import React from 'react';
import TextCounter from './TextCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextCounter limit={20} />
    </div>
  );
}

export default App;