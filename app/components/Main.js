import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';

export default class Main extends Component {
  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  render() {
    const pageImages = location.pathname === '/favorites' ?
      this.props.images.filter(image => image.favorite) :
      this.props.images.filter(image => image.style === location.pathname.substring(7));

    return (
      <div>
        <PageInfo />
        <ImagesList isLoading={this.props.isLoading} images={pageImages}/>
      </div>
    );
  }
}
