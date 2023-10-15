import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33A0FF'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;