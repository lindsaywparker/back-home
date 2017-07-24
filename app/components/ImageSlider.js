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
      <h3 className='slider-title'>{style.toUpperCase()}</h3>
      <div className='image-slider'>
        {slider}
        <NavLink to={`/style/${style}`} className='slider-title see-more'>
          {`See more from ${style.toUpperCase()}`}
        </NavLink>
      </div>
    </div>
  );
};

export default ImageSlider;