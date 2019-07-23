import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import WorkModality from './components/WorkModality';
import WorkModalityCategory from './components/WorkModalityCategory';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';


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
