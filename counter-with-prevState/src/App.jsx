import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {

    setCounter(prevCounter => prevCounter + 1);

  }

  const decreaseCounter = () => {

    setCounter(prevCounter => prevCounter - 1);

  }

  return (
    <>
      <h3>Counter: {counter} </h3>
      <button onClick={increaseCounter} >Increase</button>
      <button onClick={decreaseCounter} >Decrease</button>

    </>
  )
}

export default App
