import React, { useEffect } from 'react'
import StudentForm from '../../../../components/student-form/studentForm'

const NewStudentPage = () => {

  useEffect(() => {

    console.log("New student page mounted.");

    return () => console.log("New student page umounted.");

  }, [])
  return (
    <div>
      {<StudentForm />}
    </div>
  )
}

export default NewStudentPage