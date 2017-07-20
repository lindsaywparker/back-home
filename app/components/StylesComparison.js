import React, { Component } from 'react';

export default class StylesComparison extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return (
      <div>
        Hi, I'm StylesComparison
      </div>
    );
  }
}
