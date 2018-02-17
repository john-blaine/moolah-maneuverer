import React from 'react';

const CalculationLog = (props) => (
  <div>
    <h2> Calculation History Log </h2>
    {props.logs.map(log =>
      <div>
        <label>Initial Investment: {log.initialInvestment}</label>
      </div>
    )}
  </div>
)

export default CalculationLog