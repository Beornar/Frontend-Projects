import axios from "axios";
import { useState } from "react";



function useCalc() {
    const [calcList, setCalcList] = useState([]);

    const addCalc = async (input1, operator, input2, result) => {
        try {
            const response = await axios.post("http://localhost:5050/calcList", {input1, operator, input2, result});

            setCalcList([
                ...calcList, response.data,
            ]);

        } catch (error) {
            console.log(error);
        }

    };


    const getCalc = async () => {
        try {
            const response = await axios("http://localhost:5050/calcList");
            setCalcList(response.data);
            console.log(response);

        } catch (error) {
            console.log(error);
        }

    }

    return { calcList, addCalc, getCalc }

}

export default useCalc