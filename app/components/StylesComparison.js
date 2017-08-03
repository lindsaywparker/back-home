import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import { STYLES, CATEGORIES, DISPLAY_NAME } from '../helpers/constants';

export default class StylesComparison extends Component {
  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='styles-comparison'>
        <div className='page-info'>
          <h2 className='page-title'>STYLES</h2>
          <p className='subtitle'>A collection of fundamental design styles you're likely to see</p>
        </div>
        {this.props.isLoading ?
          <div className='loader-container'>
            <img className='loader'
                 src='../assets/loader.gif'
                 alt='Loading...' />
          </div>
          :
          <div>
            <div className='styles-matrix'>
              {STYLES.map((style, i) =>
                <ImageSlider key={i}
                             images={this.props.sliderImages[style]}
                             style={style}
                             favorites={this.props.favorites}
                             handleFavorite={this.props.handleFavorite.bind(this)} />,
              )}
            </div>
            <div className='comparison-footer'>
              <h3>See more from</h3>
              <div className='see-more-container'>
                {CATEGORIES.map((category, i) =>
                  <NavLink to={`/styles/${category}`} key={i} className='see-more-category'>
                    {DISPLAY_NAME[category]}
                  </NavLink>,
                )}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
