import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import PageInfo from './PageInfo';
import { STYLES, CATEGORIES, DISPLAY_NAME } from '../helpers/constants';

export default class StylesComparison extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const randomImagesObj = STYLES.reduce((styleAcc, style) => {
      styleAcc[style] = CATEGORIES.reduce((catAcc, category) => {
        const array = this.props.images.filter((image) => {
          return (image.style === style && image.category === category);
        });
        const randomImageSrc = array.length !== 0 ?
          array[Math.floor(Math.random() * array.length)].src :
          '../assets/no-image-found.jpg';

        catAcc[category] = randomImageSrc;
        return catAcc;
      }, {});

      return styleAcc;
    }, {});

    const content = this.props.isLoading ?
      <img className='loader' src='../assets/loader.gif' alt='Loading...' /> :
      <div>
        <PageInfo location={location} />
        <div className='styles-matrix'>
          {STYLES.map((style, i) =>
            <ImageSlider key={i}
                         images={randomImagesObj[style]}
                         style={style} />,
          )}
        </div>
      </div>;

    return (
      <div>
        {content}
        <h3>See more</h3>
        {CATEGORIES.map((category, i) =>
          <NavLink to={`/styles/all/${category}`} key={i} className='slider-title see-more-category'>
            {DISPLAY_NAME[category]}
          </NavLink>,
        )}
      </div>
    );
  }
}
