import React from 'react'
import { useState } from 'react';
import axios from "axios"

const useCalc = () => {
    const [calcList, setCalcList] = useState([]);

    const addCalc = async (input1, operator, input2, result) => {
        try {
            const response = await axios.post("http://localhost:5050/calcList", {input1, operator, input2, result});
            setCalcList([
                ...calcList,
                { input1, input2, result, operator, id: Date.now().toString() },
            ]);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    const getCalc = async () => {
        try {
            const response = await axios("http://localhost:5050/calcList");
            setCalcList(response.data);

        } catch (error) {
            console.log(error);

        }
    }

    return {calcList, addCalc, getCalc};


}

export default useCalc