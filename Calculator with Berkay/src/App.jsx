import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({ input1: 0, input2: 0 });
  const [calcList, setCalcList] = useState([]);


  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const doCalc = (operator) => {
    const { input1, input2 } = input;
    const result = operations[operator](input1, input2);
    setCalcList([...calcList, { input1, input2, result, operator, id: Date.now().toString() }])
  };

  return (
    <>
      <header>
        <h1>Basic CALCULATOR</h1>
      </header>
      <main>
        <div className="calc-form">
          <input
            type="number"
            value={input.input1}
            onChange={(event) => setInput({ ...input, input1: event.target.valueAsNumber })}
          />
          <input
            type="number"
            value={input.input2}
            onChange={(event) => setInput({ ...input, input2: event.target.valueAsNumber })}
          />
          <div className="buttons">
            {Object.keys(operations).map((operator) => (
              <button key={operator} onClick={() => doCalc(operator)}>
                {operator}
              </button>
            ))}
          </div>
        </div>
        <div className="calc-list">
          {calcList.map((calc) => (
            <div className="calc-card" key={calc.id}>
              <span>{calc.input1}</span>
              <span>{calc.operator}</span>
              <span>{calc.input2}</span>
              <span>=</span>
              <span>{calc.result}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;