import { useContext } from 'react'
import './App.css'
import CalculationContext from './CalculationContext'

function App() {  
  return (
    <CalculationContext.Provider value={{ total: null, next: null, operation: null }}>
      <div className='component-app'>
        <h1 style={{color: 'white'}}>It's me, Mario.</h1>
      </div>
    </CalculationContext.Provider>
  );
}

export default App;
