import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    images: []
  }

  componentDidMount() {
    axios.get('https://us-central1-btm-pr.cloudfunctions.net/getImages')
    .then(res => {
      const images = res.data;
      this.setState({ images });
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>App Home</h1>
        <p className="txt-center">This is the app home.</p>
        <ul>
          { this.state.images.map(image => <li key={image.src}>{image.title} | {image.modality} | {image.src}</li>) }
        </ul>
      </React.Fragment>
    )
  }
}

export default App;