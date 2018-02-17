import React from 'react';
import CalculatorList from './CalculatorList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
        <div>
          <p></p>
          <h3>Please enter your username: <input onChange={this.changeUsername}/></h3>
          <CalculatorList username={this.state.username} />
        </div>
      );
  }
}

export default App