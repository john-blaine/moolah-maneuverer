import React from 'react';
import netPresentValue from './helpers/calculators.js';

class NPVCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialInvestment: 0,
      cashInflows: 0,
      numberOfPeriods: 0,
      discountRate: 0
    };

    this.changeInvestment = this.changeInvestment.bind(this);
    this.changeCashInflows = this.changeCashInflows.bind(this);
    this.changePeriods = this.changePeriods.bind(this);
    this.changeDiscountRate = this.changeDiscountRate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeInvestment(event) {
    this.setState({
      initialInvestment: event.target.value,
      // discountRate: event.target.discount-rate
    });
  }

  changeCashInflows(event) {
    this.setState({
      cashInflows: event.target.value
    });
  }

  changePeriods(event) {
    this.setState({
      numberOfPeriods: event.target.value
    });
  }

  changeDiscountRate(event) {
    this.setState({
      discountRate: event.target.value
    });
  }

  handleSubmit(event) {
    debugger;
    alert('Submitted!');
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <h4>Net Present Value Calculator:</h4>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Initial Investment:
            <input id="initial-investment" type="text" initial-investment={this.state.initialInvestment} onChange={this.changeInvestment}/>
          </label>
        </div>
        <div>
        <p></p>
          <label>
            Expected Cash Inflows Per Period:
            <input id="cash-inflows" type="text" cash-inflows={this.state.cashInflows} onChange={this.changeCashInflows}/>
          </label>
        </div>
        <div>
        <p></p>
          <label>
            Number Of Periods:
            <input id="periods" type="text" periods={this.state.numberOfPeriods} onChange={this.changePeriods}/>
          </label>
        </div>
        <div>
        <p></p>
          <label>
            Discount Rate:
            <input id="discount-rate" type="text" discount-rate={this.state.discountRate} onChange={this.changeDiscountRate}/>
          </label>
        </div>
        <input type="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default NPVCalculator