import { baseService } from "../services/baseService";

export const getStudents = async () => {
    try {
        const response = await baseService.get("/students");

        if (response.status !== 200) {
            throw new Error("Can not get the list");
        }
        return response.data;
    } catch (error) {
        console.error("getStudents error: ", error);
    }
}

export const getStudentById = async (studentId) => {
    try {
        const response = await baseService.get(`/students/${studentId}`);
        if (response.status !== 200) {
            throw new Error("Can not get the student.")
        }
        return response.data;
    } catch (error) {
        console.error("getStudentById error: ", error);
    }
}

export const postStudent = async (newStudent) => {
    try {
        const response = await baseService.post("/students", newStudent);

        if (response.status !== 201) {
            throw new Error("Can not create the student.")
        }
        return response.data;
    } catch (error) {
        console.error("postStudent error: ", error);
    }
}

export const deleteStudent = async (studentId) => {
    try {
        const response = await baseService.delete(`/students/${studentId}`);
        if (response.status !== 200) {
            throw new Error("Can not delete the student.")
        }
        return response.data;
    } catch (error) {
        console.error("deleteStudent error: ", error);
    }
}