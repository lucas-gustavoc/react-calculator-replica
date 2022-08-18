import { useContext } from "react"
import CalculationContext from "../contexts/CalculationContext"

export default function ButtonPanel() {
    const { calculate } = useContext(CalculationContext)

    return (
        <div>
            <button onClick={() => calculate("5")}>Change</button>
        </div>
    )
}