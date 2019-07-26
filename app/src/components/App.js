import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';
// import { FILTER_SINGLE } from '../api/requests';
import Nav from './Nav/Nav';
// import Home from './Views/Home';
// import About from './Views/About';
// import Work from './Views/Work';
// import WorkModality from './Views/WorkModality';
// import WorkModalityCategory from './Views/WorkModalityCategory';
// import Contact from './Views/Contact';
// import Terms from './Views/Terms';
// import PageNotFound from './Views/PageNotFound';
import View from './views/View';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImages: [],
      message: 'app message',
      view: null
    }
    this.changeView = this.changeView.bind(this);
  } 

  changeView(newView) {
    this.setState({
      view: newView
    });
  }
  
  render() {
    return (
      <div>
        <Nav/>
        <h1>Brian's Site</h1>
        <Switch>
          <Route 
            exact path='/'
            render={() => 
            <View page="home"/>
          }/>
          <Route 
            path='/about'
            render={() => 
            <View page="about"/>
          }/>
        </Switch>

      </div>
    );
  }
}

export default App;