import React, { Component } from 'react';
import axios from 'axios';
import { 
  FILTER_IMAGES
 } from '../api/requests';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    images: []
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: FILTER_IMAGES,
      params: {
        filterOne: 'medium',
        filterOneValue: 'marble'
      }
    })
    .then(res => {
      this.setState({ images: res.data });
    })
    .catch(error => {
      this.setState({ images: error.message });
    });
  }

  render() {
    const images = this.state.images;
    console.log(images);
    return (
      <React.Fragment>
        <h1>App Home</h1>
        <p className="txt-center">{images.length}</p>

      </React.Fragment>
    )
  }
}

export default App;