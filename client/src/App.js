
import {React, useState,useEffect} from 'react'

function App() {
  function onIncrease(){
    console.log('+1')
  }

  const OnDecrease = () =>{
    console.log('-1')
  }

  return (
    <div className="App">
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={OnDecrease}>-1</button>
    </div>
  );
}

export default App;
