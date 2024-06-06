import { createRef, useReducer } from 'react';
import './App.css';


const initialState = { counter: 0, error: null, lastUpdated: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return { ...state, counter: state.counter + 1, lastUpdated: new Date().toLocaleDateString() };
    case "DECREMENT_BY_ONE":
      return { ...state, counter: state.counter - 1, lastUpdated: new Date().toLocaleDateString() };
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload.amount, lastUpdated: new Date().toLocaleDateString() }
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload.amount, lastUpdated: new Date().toLocaleDateString() }
    case "SET_COUNTER":
      return { ...state, counter: action.payload.amount, lastUpdated: new Date().toLocaleDateString() }
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state.counter;

  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incByRef = createRef();
  const decByRef = createRef();
  const setByRef = createRef();

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
      <button onClick={() => dispatch({ type: "INCREMENT", payload: { amount: Number(incByRef.current.value) } })} >Increase By</button>
      <input type="text" ref={incByRef} placeholder='Increase Amount' />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT", payload: { amount: Number(decByRef.current.value) } })} >Decrease By</button>
      <input type="text" ref={decByRef} placeholder='Decrease Amount' />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "SET_COUNTER", payload: {amount:Number(setByRef.current.value) } })} >Set Counter</button>
      <input type="text" ref={setByRef} placeholder='Set Amount' />

    </>

    // <BrowserRouter>

    //   <StudentProvider >
    //     <Header/>
    //     <br />
    //     <main>
    //       <Routes>
    //         <Route path='/' element={<LandingPage />} />
    //         <Route path='/students' element={ <StudentListPage/>} />
    //         <Route path='/students/new' element={ <NewStudentPage/>} />
    //         <Route path='*' element={ <NotFoundPage/>} />
    //       </Routes>
    //     </main>
    //   </StudentProvider>

    // </BrowserRouter>
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
