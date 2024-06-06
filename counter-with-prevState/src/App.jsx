import { createRef, useReducer } from 'react';
import './App.css';


const initialState = { counter: 0, lastUpdated: null, error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, error: action.payload.error };
    case "INCREMENT_BY_ONE":
      return { ...state, counter: state.counter + 1, lastUpdated: new Date().toLocaleString() };
    case "DECREMENT_BY_ONE":
      return { ...state, counter: state.counter - 1, lastUpdated: new Date().toLocaleString() };
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload.amount, lastUpdated: new Date().toLocaleString(), error: null }
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload.amount, lastUpdated: new Date().toLocaleString(), error: null }
    case "SET_COUNTER":
      return { ...state, counter: action.payload.amount, lastUpdated: new Date().toLocaleString(), error: null }
    case "RESET":
      return { ...state, counter: 0, lastUpdated: new Date().toLocaleString() };
    default:
      return state.counter;

  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incByRef = createRef();
  const decByRef = createRef();
  const setRef = createRef();


  return (
    <>

      <p>Counter: {state.counter} </p>
      <p>Last Updated: {state.lastUpdated} </p>
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT_BY_ONE" })} >Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_ONE" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <br />
      <br />
      <button onClick={() => !isNaN(incByRef.current.value) ?
        dispatch({ type: "INCREMENT", payload: { amount: Number(incByRef.current.value) } }) :
        dispatch({ type: "ERROR", payload: { error: "Increment value is not a number" } })} >Increase By</button>
      <input type="text" ref={incByRef} placeholder='Increase Amount' />
      <br />
      <br />
      <button onClick={() => !isNaN(decByRef.current.value) ?
        dispatch({ type: "DECREMENT", payload: { amount: Number(decByRef.current.value) } }) :
        dispatch({ type: "ERROR", payload: { error: "Decrement value is not a number" } })} >Decrease By</button>
      <input type="text" ref={decByRef} placeholder='Decrease Amount' />
      <br />
      <br />
      <button onClick={() => !isNaN(setRef.current.value) ?
        dispatch({ type: "DECREMENT", payload: { amount: Number(setRef.current.value) } }) :
        dispatch({ type: "ERROR", payload: { error: "Set counter value is not a number" } })} >Set Counter</button>
      <input type="text" ref={setRef} placeholder='Set Amount' />

      <p>{state.error} </p>

    </>


  )
}

export default App




// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [counter, setCounter] = useState(0);

//   const increaseCounter = () => {

//     setCounter(prevCounter => prevCounter + 1);

//   }

//   const decreaseCounter = () => {

//     setCounter(prevCounter => prevCounter - 1);

//   }

//   const resetCounter = () => {

//     setCounter(0);

//   }

//   return (
//     <>
//       <h3>Counter: {counter} </h3>
//       <button onClick={increaseCounter} >Increase</button>
//       <button onClick={decreaseCounter} >Decrease</button>
//       <button onClick={resetCounter} >Reset Counter</button>

//     </>
//   )
// }

// export default App
