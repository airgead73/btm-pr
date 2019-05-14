import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImages: [],
      message: ''
    }
  }  

  render() {
    return (
      <div>
        <h1>Brian's Work</h1>
      </div>
    );
  }
}

export default App;
