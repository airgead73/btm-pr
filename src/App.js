import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImages: [],
      message: ''
    }
  }  

  componentDidMount() {
    return axios.get('https://us-central1-btm-pr.cloudfunctions.net/getImages').then((response) => {
      this.setState({
        currentImages: response.data
      })
    })
  }  
  
  renderItems() {
    
    const { currentImages, message } = this.state;

    return (
      currentImages.length > 0 &&
      <div>
                  
          {
            currentImages.map(item => {
              return (

                <figure key={item.id}>
                  <img src={item.src} alt={item.alt} title={item.alt}/>
                  <figcaption>{item.title}</figcaption>
                </figure>
              )
            })
          }
        </div> 
    )
  }   
  

  render() {
    return (
      <div>
        <h1>Images</h1>
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
