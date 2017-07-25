import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MainContainer from '../containers/MainContainer';
import StylesCompContainer from '../containers/StylesCompContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact
               path='/'
               component={Home} />
        <Route exact
               path='/styles'
               component={StylesCompContainer} />
        <Route exact
               path='/favorites'
               component={MainContainer} />
        <Route path='/style/:style'
               component={MainContainer} />
        <Route path='/all/:category'
               component={MainContainer} />
      </div>
    );
  }
}

export default App;
