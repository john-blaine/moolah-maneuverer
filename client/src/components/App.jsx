import React from 'react';
import CalculatorList from './CalculatorList.jsx';
import CalculationLog from './CalculationLog.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      logs: []
    };

    this.changeUsername = this.changeUsername.bind(this);
    this.retrieveLogs = this.retrieveLogs.bind(this);
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  retrieveLogs() {
    var component = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/logs',
      data: component.state.username,
      success: function(data) {
        debugger;
        data = JSON.parse(data);
        component.setState({
          logs: data
        });
      }
    });
  }

  render() {
    return (
        <div>
          <p></p>
          <h3>Please enter your username to save your calculation history: <input onChange={this.changeUsername}/></h3>
          <h3>After entering username, press to display history:</h3><button onClick={this.retrieveLogs}>Retrieve</button>
          <CalculatorList username={this.state.username}/>
          <CalculationLog logs={this.state.logs}/>
        </div>
      );
  }
}

export default App