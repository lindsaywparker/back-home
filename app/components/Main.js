import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';
import { DISPLAY_NAME } from '../helpers/constants';

export default class Main extends Component {
  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  render() {
    let value;
    let pageImages;
    let title;

    if (location.pathname === '/favorites') {
      pageImages = this.props.images.filter(image => image.favorite);
    } else {
      const keys = Object.keys(this.props.match.params);
      if (keys.length > 1) {
        title = `${DISPLAY_NAME[this.props.match.params[keys[0]]]} ${DISPLAY_NAME[this.props.match.params[keys[1]]]}`;
        pageImages = this.props.images.filter((image) => {
          return image[keys[0]] === this.props.match.params[keys[0]] &&
                 image[keys[1]] === this.props.match.params[keys[1]];
        });
      } else {
        value = this.props.match.params[keys[0]];
        title = DISPLAY_NAME[this.props.match.params[keys[0]]];
        pageImages = this.props.images.filter(image => image[keys[0]] === value);
      }
    }


    return (
      <div>
        <PageInfo value={value} title={title} />
        <ImagesList isLoading={this.props.isLoading}
                    images={pageImages}
                    handleFavorite={this.props.handleFavorite.bind(this)}/>
      </div>
    );
  }
}
