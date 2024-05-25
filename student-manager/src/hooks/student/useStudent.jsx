import { useState } from 'react';
import { deleteStudent as deleteStudentAPI, getStudents as getStudentsAPI, postStudent } from '../../network/requests/studentRequest';

const useStudent = () => {


    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const createStudent = async (student) => {
        try {
            setIsLoading(true);
            const newStudent = await postStudent(student);
            setStudentList(prevStudentList => [...prevStudentList, newStudent]);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const deleteStudent = async (studentId) => {
        try {
            setIsLoading(true);
            await deleteStudentAPI(studentId);
            setStudentList(
                (prevStudentList) => {
                    return prevStudentList.filter(
                        (student) => student.id !== studentId
                    )
                }
            )
        }
        catch (error) {
            console.log("useStudent: ", error);
            // throw new Error("Onay hatasi");
        }
        finally {
            setIsLoading(false);
        }
    }

    const getStudents = async () => {
        try {
            setIsLoading(true);
            const students = await getStudentsAPI();
            setStudentList(students);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }


    return { studentList, isLoading, createStudent, deleteStudent, getStudents }
}

export default useStudent