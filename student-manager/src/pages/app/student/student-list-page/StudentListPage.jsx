import React, { useEffect } from 'react'
import StudentList from '../../../../components/student-list/studentList'

export const StudentListPage = () => {

  useEffect(() => {

    console.log("Student List page mounted.");

    return () => console.log("Student List page umounted.");

  }, [])
  return (
    <div>
      <StudentList />
    </div>
  )
}

export default StudentListPage