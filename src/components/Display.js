import { useContext } from "react"
import CalculationContext from "../contexts/CalculationContext"

import './Display.css'

export default function Display() {
    const { value: {total, next} } = useContext(CalculationContext)

    return (
        <div className="component-display">
            <div>{next || total || "0"}</div>
        </div>
    )
}