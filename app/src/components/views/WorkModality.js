import React, { Component } from 'react';

class WorkModality extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modality: null,
      images: null
    }
  }

  componentDidMount() {
    this.setState({ modality: this.props.match.params.modality });
  }

  render() {
    return (
      <>
      <h1 className={this.state.modality}>{this.props.match.params.modality}</h1>
      </>
    );
  }
}

export default WorkModality;

