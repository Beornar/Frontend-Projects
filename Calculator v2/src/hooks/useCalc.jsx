import { useState } from "react";
import { createCalc, getCalc as getCalcAPI } from "../network/requests/calcRequests";




const useCalc = () => {
    const [calcList, setCalcList] = useState([]);


    // const addCalc = async ({input1, operator, input2, result}) => {
    //     try {
    //         const newCalc = await createCalc({input1, operator, input2, result});
    //         setCalcList(prevCalcList => [...prevCalcList, {input1, operator, input2, result}]);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const getCalc = async () => {

    //     try {
    //         const calcs = await getCalcAPI();
    //         setCalcList(calcs);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    

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

    } catch (error) {
        console.log(error);
    }

}

    
    return { calcList, addCalc, getCalc }
    
}

export default useCalc

////////useCounter örneği prevState için

// import { useState } from 'react';

// const useCounter = () => {
//     const [counter, setCounter] = useState(0);

//     const increment = () => setCounter(prevCounter => prevCounter + 1);
//     const decrement = () => setCounter(prevCounter => prevCounter - 1);
//     const reset = () => setCounter(0);
    
//     return {increment, decrement, reset, counter}
// }

// export default useCounter












// const addCalc = async (input1, operator, input2, result) => {
//     try {
//         const response = await axios.post("http://localhost:5050/calcList", {input1, operator, input2, result});

//         setCalcList([
//             ...calcList, response.data,
//         ]);

//     } catch (error) {
//         console.log(error);
//     }

// };


// const getCalc = async () => {
//     try {
//         const response = await axios("http://localhost:5050/calcList");
//         setCalcList(response.data);

//     } catch (error) {
//         console.log(error);
//     }

// }