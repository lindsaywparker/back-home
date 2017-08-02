import React, { Component } from 'react';
import PageInfo from './PageInfo';
import FavoriteInfo from './FavoriteInfo';
import ImagesList from './ImagesList';
import { DISPLAY_NAME } from '../helpers/constants';

export default class Main extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  // TODO: bring out logic below into helpers here.
  oneConditionFilter(condition) {
    return this.props.images.filter(image =>
      image.style === condition || image.category === condition);
  }

  render() {
    const { type, style, category } = this.props;
    const value = type;
    let title = DISPLAY_NAME[value];
    let renderImages = this.props.images;

    if (type) {
      renderImages = this.oneConditionFilter(type);
    }

    if (style && category) {
      renderImages = renderImages.filter(image =>
        image.style === style &&
        image.category === category);
      title = `${DISPLAY_NAME[style]}
               ${DISPLAY_NAME[category]}`;
    }

    return (
      <div className='main'>
        {location.pathname === '/favorites' ?
          <FavoriteInfo images={this.props.favorites}/>
          :
          <PageInfo value={value}
                    title={title}
                    images={renderImages}/>
        }
        <ImagesList isLoading={this.props.isLoading}
                      images={renderImages}
                      favorites={this.props.favorites}
                      handleFavorite={this.props.handleFavorite.bind(this)} />
      </div>
    );
  }
}
