import { useState } from 'react'

import './App.css'

function App() {
  // let counter = 0;
  // let addValue = ()=>{
  //   counter = counter + 1;
  //   console.log(counter);
  // }

  const [counter,setCounter] = useState(0);
  const addValue = ()=>{
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Project 1 : Counter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}
      >Add Value</button> {" "}
      <button onClick={removeValue}
      >Decrease Value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
