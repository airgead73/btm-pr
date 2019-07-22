import React, { Component } from 'react';
import axios from 'axios';
import { 
  GET_IMAGES
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
      url: GET_IMAGES
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
        <p className="txt-center">Image Count: {images.length}</p>
        {images.map(image =>(
          <figure key={image.id} id={image.id}>
            <img src={image.src} alt={image.alt} title={image.title}/>
          </figure>
        ))}
      </React.Fragment>
    )
  }
}

export default App;