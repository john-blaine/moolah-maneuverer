import React from 'react';
import CalculatorList from './CalculatorList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <CalculatorList/>
        </div>
      );
  }
}

export default App