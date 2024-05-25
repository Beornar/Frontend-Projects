import { baseService } from "../services/baseService";


export const getCalc = async () => {
    try {
        const response = await baseService.get("/calcList");
        if (response.status !== 200) {
            throw new Error ("Can not get the list.");
        }
        return response.data;

    } catch (error) {
        console.log(error);

    }
}

export const createCalc = async (newCalc) => {
    try {
        const response = await baseService.post("/calcList", {newCalc});
        if (response.status !== 201) {
            throw new Error ("Can not create to the list");
        }
        return response.data;
        
    } catch (error) {
        console.log(error);
        
    }
}
