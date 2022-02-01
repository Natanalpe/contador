import React, { useState } from 'react'
import './App.css';

function App() {

  const [num, setNum] = useState(0)

  function Increase() {
    setNum(num + 1)
  }

  function Reset() {
    setNum(0)
  }

  function Decrease() {
    if(num == 0) {
      setNum(0)
    }else{
      setNum(num - 1)
    }
  }
  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{num}</h2>
      <div className='btns'>
        <button onClick={() => {
          Decrease()
        }}>Diminuir</button>
        
        <button onClick={() => {
          Reset()
        }}>Resetar</button>

        <button onClick={() => {
          Increase()
        }}>Aumentar</button>
      </div>
    </div>
  );
}

export default App;
