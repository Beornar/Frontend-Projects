import './App.css';
import StudentForm from './components/student-form/studentForm';
import StudentList from './components/student-list/studentList';
import Header from './components/shared/header/header';
import { StudentProvider } from './contexts/StudentContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/shared/landing-page/LandingPage';

function App() {

  return (

    <BrowserRouter>

      <StudentProvider >
        <Header title={"Student Manager"} navElements={["Home", "Profile", "Contact"]} />
        <br />
        <main>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/students' element={ <StudentList/>} />
            <Route path='/students/new' element={ <StudentForm/>} />
          </Routes>
        </main>
      </StudentProvider>

    </BrowserRouter>
  )
}

export default App