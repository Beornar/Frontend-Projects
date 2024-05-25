import './App.css';
import StudentForm from './components/student-form/studentForm';
import StudentList from './components/student-list/studentList';
import Header from './components/shared/header/header';
import { StudentProvider } from './contexts/StudentContext';

function App() {

  return (
    <StudentProvider >
      <Header title={"Student Manager"} navElements={["Home", "Profile", "Contact"]} />
      <br />
      <main>
        <StudentForm />
        <br />
        <StudentList  />
      </main>
    </StudentProvider>
  )
}

export default App