import { createContext, useEffect } from 'react';
import useStudent from '../hooks/student/useStudent';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const { studentList, isLoading, getStudents, createStudent, deleteStudent } = useStudent();

    useEffect(
        () => {
            getStudents();
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