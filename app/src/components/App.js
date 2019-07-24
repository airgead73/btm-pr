import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { FILTER_SINGLE } from '../api/requests';
import Nav from './Nav/Nav';
import Home from './Views/Home';
import About from './Views/About';
import Work from './Views/Work';
import WorkModality from './Views/WorkModality';
import WorkModalityCategory from './Views/WorkModalityCategory';
import Contact from './Views/Contact';
import Terms from './Views/Terms';
import PageNotFound from './Views/PageNotFound';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImages: [],
      message: '',
      view: 'home'
    }
  } 
  
  componentDidMount() {
    axios({
      method: 'GET',
      url: FILTER_SINGLE,
      params: {
        filter: 'modality',
        filterValue: 'sculpture'
      }
    })
    .then(res => {
      this.setState({ currentImages: res.data })
    })
    .catch(error => {
      this.setState({ message: error.message });
    });
  }

  render() {
    return (
      <div>
        <Nav/>
        <h1>Brian's Work</h1>
        <Switch>
          <Route exact path='/'component={Home}/>
          <Route path='/about' component={About}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/work/:modality' component={WorkModality}/>
          <Route path='/work/:modality/:category' component={WorkModalityCategory}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/terms' component={Terms}/>
          <Route component={PageNotFound}/>
        </Switch>

      </div>
    );
  }
}

export default App;