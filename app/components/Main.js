import React, { Component } from 'react';
import FavoriteInfo from './FavoriteInfo';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';
import { DISPLAY_NAME } from '../helpers/constants';

export default class Main extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  oneConditionFilter(condition) {
    return this.props.images.filter(image =>
      image.style === condition || image.category === condition,
    );
  }

  twoConditionFilter(style, category) {
    return this.props.images.filter(image =>
      image.style === style && image.category === category,
    );
  }

  render() {
    const { type, style, category } = this.props;
    let title = DISPLAY_NAME[type];
    let renderImages = this.props.images;

    if (type) {
      renderImages = this.oneConditionFilter(type);
    }

    if (style && category) {
      renderImages = this.twoConditionFilter(style, category);
      title = `${DISPLAY_NAME[style]} ${DISPLAY_NAME[category]}`;
    }

    return (
      <div className='main'>
        {location.pathname === '/favorites' ?
          <FavoriteInfo images={this.props.favorites}/>
          :
          <PageInfo type={type}
                    title={title} />
        }
        <ImagesList images={renderImages}
                    favorites={this.props.favorites}
                    handleFavorite={this.props.handleFavorite.bind(this)} />
      </div>
    );
  }
}
