import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';

export default class Main extends Component {
  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  render() {
    return (
      <div>
        <PageInfo />
        <ImagesList isLoading={this.props.isLoading} images={this.props.images}/>
      </div>
    );
  }
}
