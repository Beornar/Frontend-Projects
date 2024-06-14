import { useMemo, useState } from 'react';
import './App.css';
import { useCallback } from 'react';

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const calculateSum = useMemo(
    () => {
      console.log("calculateSum called");
      console.log("num1:" + num1 + `\n` + "num2:" + num2);
      return num1 + num2;
    },
    [num1, num2]
  )

  // const calculateSum = useCallback(
  //   () => {
  //     console.log("calculateSum called");
  //     console.log("num1:" + num1 + `\n` + "num2:" + num2);
  //     return num1 + num2;
  //   },
  //   [num1, num2]
  // )


  const handleClick = () => {
    console.log("handleClick called");
    setSum(calculateSum);
  }

  return (
    <>

      <p>Num1:</p>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <br />
      <p>Num2:</p>
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <br />
      <button onClick={handleClick} >Calculate Sum </button>
      <br />
      <p>Sum: {sum} </p>

    </>
  )
}

export default App
