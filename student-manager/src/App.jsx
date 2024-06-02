import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/header/header';
import { StudentProvider } from './contexts/StudentContext';
import NewStudentPage from './pages/app/student/new-student-page/NewStudentPage';
import StudentListPage from './pages/app/student/student-list-page/StudentListPage';
import { LandingPage } from './pages/shared/landing-page/LandingPage';
import NotFoundPage from './pages/shared/not-found-page/NotFoundPage';
import { useReducer } from 'react';


const initialState = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return {counter: 0};
    default:
      return state.counter;

  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>

      <p>Counter: {state.counter} </p>
      <button onClick={() => dispatch({type: "INCREMENT"})} >Increase</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>Decrease</button>
      <button onClick={() => dispatch({type: "RESET"})}>Reset</button>

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