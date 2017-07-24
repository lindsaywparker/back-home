import React from 'react';
import Image from './Image';
import { NavLink } from 'react-router-dom';

const ImageSlider = ({ images, style }) => {
  const catKeys = Object.keys(images);
  const slider = catKeys.map((category, i) =>
    <Image key={i} category={category} src={images[category]} />,
  );

  return (
    <div className='title-and-slider'>
      <NavLink to={`/${style}`} className='slider-title'>{style.toUpperCase()}</NavLink>
      <div className='image-slider'>
        {slider}
      </div>
    </div>
  );
};

export default ImageSlider;