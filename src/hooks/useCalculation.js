import { useState } from "react"

export default function useCalculation() {
    const [ total, setTotal ] = useState(null)
    const [ next, setNext ] = useState(null)
    const [ operation, setOperation ] = useState(null)

    return [ 
        { total, next, operation }, 
        (total, next, operation) => {
            setTotal(total);
            setNext(next);
            setOperation(operation);
        }
    ]
}