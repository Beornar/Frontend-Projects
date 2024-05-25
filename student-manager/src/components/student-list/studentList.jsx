import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";
import StudentCard from "../student-card/studentCard";

const StudentList = () => {
    const { studentList, isLoading } = useContext(StudentContext);
    return (
        <div className="student-list-container">
            <div className="student-list">
                {isLoading ? <p>Loading...</p>
                    : studentList.map(student => {
                        return <StudentCard student={student} key={student.id} />
                    })}
            </div>
        </div>
    )
}

export default StudentList;