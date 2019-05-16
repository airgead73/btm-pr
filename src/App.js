import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Work from './Work';
import WorkModality from './WorkModality';
import WorkModalityCategory from './WorkModalityCategory';
import Contact from './Contact';
import PageNotFound from './PageNotFound';


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
        <Nav/>
        <h1>Brian's Work</h1>
        <Switch>
          <Route exact path='/'component={Home}/>
          <Route path='/about' component={About}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/work/:modality' component={WorkModality}/>
          <Route path='/work/:modality/:category' component={WorkModalityCategory}/>
          <Route path='/contact' component={Contact}/>
          <Route component={PageNotFound}/>
          
        </Switch>

      </div>
    );
  }
}

export default App;
