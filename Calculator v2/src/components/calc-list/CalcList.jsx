import React, { useContext } from "react";
import CalcCard from "../calc-card/CalcCard";
import { CalcContext } from "../../contexts/calc/CalcContext";

const CalcList = () => {

    const {calcList} = useContext(CalcContext);

    return (
        <div className="calc-list">
            {calcList.map((calc) => (
                <CalcCard calc={calc} key={calc.id} />
            ))}
        </div>
    );
};

export default CalcList;