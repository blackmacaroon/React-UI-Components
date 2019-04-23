import React from 'react';
import NumberButtons from './components/ButtonComponents/NumberButton';
import FunctionButtons from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


import './App.css';

const App = () => {
  return (
    <div className='calculator'>
      <div className='display'>
        <CalculatorDisplay />
      </div>
      <div className='buttons'>
        <div className='numStyle'><NumberButtons /></div>
        <div className='mathStyle'><FunctionButtons /></div>
      </div>
      
      
    </div>
  );
};

export default App;
