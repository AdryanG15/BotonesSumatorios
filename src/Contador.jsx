import { useState } from "react"

const useContador = ( sumar = 1, restar = 1) => {
    
    const [value, setValue] = useState(0)

    const incrementValue = () => setValue(value + sumar)

    const decrementValue = () => setValue(value - restar)

  return {
    value,
    incrementValue,
    decrementValue,
  }
}

export default useContador