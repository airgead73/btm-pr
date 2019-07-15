import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>App Home</h1>
        <p className="txt-center">This is the app home.</p>
      </React.Fragment>
    )
  }
}

export default App;