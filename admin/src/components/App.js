import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Admin Home</h1>
        <p className="txt-center">This is the admin home.</p>
      </React.Fragment>
    )
  }
}

export default App;