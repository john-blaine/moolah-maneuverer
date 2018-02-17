import React from 'react';
import NPVCalculator from './NPVCalculator.jsx';

const CalculatorList = (props) => (
  <div>
    <NPVCalculator username = {props.username}/>
  </div>
)

export default CalculatorList