import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      message: ''
    }
  }  

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default App;