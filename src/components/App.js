import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        Hi, I'm components/App.js
        <Header />
      </div>
    );
  }
}
