import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/header/header';
import { StudentProvider } from './contexts/StudentContext';
import NewStudentPage from './pages/app/student/new-student-page/NewStudentPage';
import StudentListPage from './pages/app/student/student-list-page/StudentListPage';
import { LandingPage } from './pages/shared/landing-page/LandingPage';
import NotFoundPage from './pages/shared/not-found-page/NotFoundPage';


function App() {


  return (
    <>

      <BrowserRouter>

        <StudentProvider >
          <Header />
          <br />
          <main>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/students' element={<StudentListPage />} />
              <Route path='/students/new' element={<NewStudentPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </StudentProvider>

    // </BrowserRouter>

    </>
  )
}

export default App