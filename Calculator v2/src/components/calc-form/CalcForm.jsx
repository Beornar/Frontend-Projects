import { useContext, useState } from "react";
import { CalcContext } from "../../contexts/calc/CalcContext";

const CalcForm = () => {
    const { addCalc } = useContext(CalcContext);
    const [input, setInput] = useState({ input1: "", input2: "" });

    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => (a / b).toFixed(3),
    };

    const doCalc = (operator) => {
        const { input1, input2 } = input;
        const result = operations[operator](input1, input2);
        addCalc(input1, operator, input2, result);
        setInput({ input1: "", input2: "" });
    };
    return (
        <div className="calc-form">
            <input
                type="number"
                value={input.input1}
                onChange={(event) =>
                    setInput({ ...input, input1: event.target.valueAsNumber })
                }
            />
            <input
                type="number"
                value={input.input2}
                onChange={(event) =>
                    setInput({ ...input, input2: event.target.valueAsNumber })
                }
            />
            <div className="buttons">
                {/* Object.keys metodu bir nesnenin keylerini bir dizi olarak döndürür. .values - .entries */}
                {Object.keys(operations).map((operator) => (
                    <button onClick={() => doCalc(operator)} key={operator}>
                        {operator}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CalcForm;