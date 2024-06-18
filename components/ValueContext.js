import {useState, createContext} from 'react'

import Calculadora from '../utils/script';

export const ValueContext = createContext();

export const ValueProvider = ({children}) => {
  const [value, setValue] = useState('0');
  const [calc, setCalc] = useState(new Calculadora('', ''));
  const togleValue = (digit) => {
    setValue(calc.verifyDigit(digit))
  }
  return (
    <ValueContext.Provider value={{value, togleValue}}>{children}</ValueContext.Provider>
  )
}