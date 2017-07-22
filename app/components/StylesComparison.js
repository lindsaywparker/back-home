import React, { Component } from 'react';
import Image from './Image';
import { STYLES, CATEGORIES } from '../helpers/constants';

export default class StylesComparison extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const randomImagesObj = STYLES.reduce((acc, style) => {
      CATEGORIES.forEach((category) => {
        const array = this.props.images.filter((image) => {
          return (image.style === style && image.category === category);
        });
        const randomImageSrc = array.length !== 0 ?
          array[Math.floor(Math.random() * array.length)].src :
          '../assets/no-image-found.jpg';

        Object.assign(acc, { [`${style}-${category}`]: randomImageSrc });
      });

      return acc;
    }, {});

    const imageCells = Object.keys(randomImagesObj);

    const content = this.props.isLoading ?
      <img className='loader' src='../assets/loader.gif' alt='Loading...' /> :
      <div className='styles-matrix'>
        {imageCells.map((key, i) =>
          <article key={i}>
            <p>{key}</p>
            <Image src={randomImagesObj[key]} />
          </article>,
        )}
      </div>;

    return (
      <div>
        {content}
      </div>
    );
  }
}
