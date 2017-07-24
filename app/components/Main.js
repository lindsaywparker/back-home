import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';

export default class Main extends Component {
  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  render() {
    const key = Object.keys(this.props.match.params)[0];
    const value = this.props.match.params[key];
    const pageImages = location.pathname === '/favorites' ?
      this.props.images.filter(image => image.favorite) :
      this.props.images.filter(image => image[key] === value);

    return (
      <div>
        <PageInfo title={value}/>
        <ImagesList isLoading={this.props.isLoading} images={pageImages}/>
      </div>
    );
  }
}
