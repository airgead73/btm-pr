import React, { Component } from 'react';
import axios from 'axios';
// import { 
//   FILTER_MULTIPLE
//  } from '../api/requests';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    images: [],
    view: 'home'
  }

  // componentDidMount() {
  //   axios({
  //     method: 'get',
  //     url: FILTER_MULTIPLE,
  //     params: {
  //       modality: "sculpture",
  //       category: "abstract"
  //     }
  //   })
  //   .then(res => {
  //     this.setState({ images: res.data });
  //   })
  //   .catch(error => {
  //     this.setState({ images: error.message });
  //   });
  // }

  render() {
    const images = this.state.images;
    console.log(images);
    return (
      <React.Fragment>
        <h1>App Home</h1>
        <p className="txt-center">images</p>


      </React.Fragment>
    )
  }
}

export default App;