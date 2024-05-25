import React, { createContext, useEffect } from 'react'
import useCalc from '../../hooks/useCalc';

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const { calcList, getCalc, addCalc } = useCalc();

  useEffect(() => {
    getCalc()
  }, [])

  const contextValue = { calcList, getCalc, addCalc };
  return (
    <CalcContext.Provider value={contextValue}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcContext;