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
        const randomImage = array.length !== 0 ?
          array[Math.floor(Math.random() * array.length)]
          :
          { style, category, src: '../assets/no-image-found.jpg' };

        catAcc[category] = randomImage;
        return catAcc;
      }, {});

      return styleAcc;
    }, {});

    const content = this.props.isLoading ?
      <div className='loader-container'>
        <img className='loader' src='../assets/loader.gif' alt='Loading...' />
      </div>
      :
      <div>
        <div className='styles-matrix'>
          {STYLES.map((style, i) =>
            <ImageSlider key={i}
                         images={randomImagesObj[style]}
                         style={style} />,
          )}
        </div>
        <div className='comparison-footer'>
          <h3>See more from</h3>
          <div className='see-more-container'>
            {CATEGORIES.map((category, i) =>
              <NavLink to={`/styles/all/${category}`} key={i} className='see-more-category'>
                {DISPLAY_NAME[category]}
              </NavLink>,
            )}
          </div>
        </div>
      </div>;

    return (
      <div>
        <PageInfo location={location} />
        {content}
      </div>
    );
  }
}
