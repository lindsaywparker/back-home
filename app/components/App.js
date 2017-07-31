import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MainContainer from '../containers/MainContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import StylesCompContainer from '../containers/StylesCompContainer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header location={location}/>
        <Route exact
               path='/'
               component={Home} />
        <Route exact
               path='/styles'
               component={StylesCompContainer} />
        <Route exact
               path='/favorites'
               component={FavoritesContainer} />
        <Route exact
               path='/styles/:type'
               render={ ({ match }) =>
                 <MainContainer type={match.params.type} /> } />
        <Route exact
               path='/styles/:style/:category'
               render={ ({ match }) =>
                 <MainContainer style={match.params.style}
                                category={match.params.category} /> } />
      </div>
    );
  }
}

export default App;
