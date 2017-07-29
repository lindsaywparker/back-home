import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';
import { DISPLAY_NAME } from '../helpers/constants';

export default class Main extends Component {
  render() {
    const value = this.props.type;
    let title = DISPLAY_NAME[value];
    let renderImages = this.props.images;

    if (this.props.type) {
      renderImages = renderImages.filter(image =>
        image.style === this.props.type || image.category === this.props.type);
    }

    if (this.props.style && this.props.category) {
      renderImages = renderImages.filter(image =>
        image.style === this.props.style &&
        image.category === this.props.category);
      title = `${DISPLAY_NAME[this.props.style]}
               ${DISPLAY_NAME[this.props.category]}`;
    }

    return (
      <div>
        <PageInfo value={value}
                  title={title}
                  images={renderImages}/>
        <ImagesList isLoading={this.props.isLoading}
                    images={renderImages}
                    favorites={this.props.favorites}
                    handleFavorite={this.props.handleFavorite.bind(this)}/>
      </div>
    );
  }
}
