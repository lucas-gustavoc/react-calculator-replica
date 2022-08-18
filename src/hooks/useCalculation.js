import { useState } from "react"
import calculate from '../logic/calculate'

export default function useCalculation() {
    const [ total, setTotal ] = useState(null)
    const [ next, setNext ] = useState(null)
    const [ operation, setOperation ] = useState(null)

    const setCalculation = buttonName => {
        const calculation = calculate({ total, next, operation }, buttonName)
        if (calculation.total) setTotal(calculation.total)
        if (calculation.next) setNext(calculation.next)
        if (calculation.operation) setOperation(calculation.operation)
    }

    return [ 
        { total, next, operation }, 
        setCalculation
    ]
}