import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

const StudentCard = ({ student }) => {

    const { deleteStudent } = useContext(StudentContext);

    const handleDelete = () => {
        try {
            deleteStudent(student.id);
        }
        catch (error) {
            console.log("StudentCard ",error);
        }
    }
    
    return (
        <div className="student-card">
            <span className="btn btn-delete" onClick={handleDelete}>X</span>
            <ul>
                <li>{student.studentName}</li>
                <li>{student.course}</li>
                <li>{student.instructor}</li>
            </ul>
            <br />
        </div>
    )
}

export default StudentCard;