import { createContext, useEffect } from 'react';
import useStudent from '../hooks/student/useStudent';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const { studentList, isLoading, getStudents, createStudent, deleteStudent } = useStudent();

    useEffect(
        () => {
            console.log("StudentProvider mounted");
            getStudents();

            // return () => console.log("cleanup");
        },
        []
    )

    const contextValue = { studentList, isLoading, createStudent, deleteStudent, getStudents }
    return (
        <StudentContext.Provider value={contextValue}>
            {children}
        </StudentContext.Provider>
    )
}