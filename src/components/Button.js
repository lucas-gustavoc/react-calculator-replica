import { useContext } from "react"
import CalculationContext from "../contexts/CalculationContext"

import "./Button.css";

export default function Button(props) {
    const { calculate } = useContext(CalculationContext)
    const onClick = () => calculate(props.name)

    const className = [
        "component-button",
        props.orange ? "orange" : "",
        props.wide ? "wide" : "",
      ];
    
    return (
        <div className={className.join(' ').trim()}>
            <button onClick={onClick}>{props.name}</button>
        </div>
        
    )
}