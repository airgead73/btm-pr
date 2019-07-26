import React, { Component } from 'react';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImages: [],
      message: 'app message',
      view: null
    }

  }
  
  componentDidMount() {
    this.setState({ view: this.props.page })
  }
 
  render() {
    return (
      <div>
        <h1>View: {this.props.page}</h1>
      </div>
    );
  }
}

export default View;