import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';

export default class Main extends Component {
  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  render() {
    const path = location.pathname.substring(1);
    const pageImages = path === 'favorites' ?
      this.props.images.filter(image => image.favorite) :
      this.props.images.filter(image => image.style === path);

    return (
      <div>
        <PageInfo />
        <ImagesList isLoading={this.props.isLoading} images={pageImages}/>
      </div>
    );
  }
}
