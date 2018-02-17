import React from 'react';
import netPresentValue from './helpers/calculators.js';
import $ from 'jquery';

class NPVCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      initialInvestment: 0,
      cashInflows: 0,
      numberOfPeriods: 0,
      discountRate: 0,
      netPresentValue: "0.00",
      dateCreated: ''
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
    var component = this;
    let NPV = netPresentValue(this.state.initialInvestment, this.state.cashInflows, this.state.numberOfPeriods, this.state.discountRate);
    this.setState({
      username: this.props.username,
      netPresentValue: NPV
    },
      function () {
        $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/logs',
          data: component.state,
          success: function(data) {
            console.log('Log data sent!');
          }
        });
      }
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Net Present Value Calculator:</h3>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Initial Investment:
            <input id="initial-investment" type="text"  onChange={this.changeInvestment}/>
          </label>
        </div>
        <div>
        <p></p>
          <label>
            Expected Cash Inflows Per Period:
            <input id="cash-inflows" type="text" onChange={this.changeCashInflows}/>
          </label>
        </div>
        <div>
        <p></p>
          <label>
            Number Of Periods:
            <input id="periods" type="text" onChange={this.changePeriods}/>
          </label>
        </div>
        <div>
        <p></p>
          <label>
            Discount Rate:
            <input id="discount-rate" type="text" onChange={this.changeDiscountRate}/>
          </label>
        </div>
        <p></p>
        <input type="submit" value="Submit" />
        </form>
        <p></p>
        <div>
          <h4>Net Present Value of Investment: ${this.state.netPresentValue}</h4>
        </div>
      </div>
    )
  }

}

export default NPVCalculator