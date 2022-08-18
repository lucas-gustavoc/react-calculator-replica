import { useContext } from "react"
import CalculationContext from "../contexts/CalculationContext"

export default function ButtonPanel() {
    const { value, calculate } = useContext(CalculationContext)

    return (
        <div>
            <p>Total: {value.total}</p>
            <p>Next: {value.next}</p>
            <p>Operation: {value.operation}</p>
            <button onClick={() => calculate(10, 20, '+')}>Change</button>
        </div>
    )
}