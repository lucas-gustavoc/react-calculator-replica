import './App.css'
import ButtonPanel from './ButtonPanel'
import Display from './Display'
import CalculationContext from '../contexts/CalculationContext'
import useCalculation from '../hooks/useCalculation'

function App() {
  const [ calculation, setCalculation ] = useCalculation()

  return (
    <CalculationContext.Provider value={{value: {...calculation}, calculate: setCalculation}}>
      <div className='component-app' style={{color: 'white'}}>
        <Display/>
        <ButtonPanel/>
      </div>
    </CalculationContext.Provider>
  );
}

export default App;
