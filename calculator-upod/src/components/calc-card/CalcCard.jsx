import React from "react";

const CalcCard = ({ calc }) => {

  
  return (
    <div className="calc-card">
      <span>{calc.input1}</span>
      <span>{calc.operator}</span>
      <span>{calc.input2}</span>
      <span>=</span>
      <span>{calc.result}</span>
    </div>
  );
};

export default CalcCard;