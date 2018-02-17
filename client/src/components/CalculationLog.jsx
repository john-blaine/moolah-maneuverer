import React from 'react';

const CalculationLog = (props) => (
  <div>
    <h2> Calculation History </h2>
    {props.logs.map(log =>
      <div>
        <label><span style={{fontWeight:'bold'}}>User Name: </span>{log.username}&nbsp;&nbsp;</label>
        <label><span style={{fontWeight:'bold'}}>Date Created: </span>{log.dateCreated}&nbsp;&nbsp;</label>
        <label><span style={{fontWeight:'bold'}}>Initial Investment: </span>${log.initialInvestment}&nbsp;&nbsp;</label>
        <label><span style={{fontWeight:'bold'}}>Cash Inflow Per Period: </span>${log.cashInflows}&nbsp;&nbsp;</label>
        <label><span style={{fontWeight:'bold'}}>Periods: </span>{log.numberOfPeriods}&nbsp;&nbsp;</label>
        <label><span style={{fontWeight:'bold'}}>Discount Rate: </span>{log.discountRate}&nbsp;&nbsp;</label>
        <label><span style={{fontWeight:'bold'}}>Net Present Value: </span>${log.netPresentValue}&nbsp;&nbsp;</label>
      </div>
    )}
  </div>
)

export default CalculationLog