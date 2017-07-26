import React from 'react';
import Image from './Image';
import { NavLink } from 'react-router-dom';
import { DISPLAY_NAME } from '../helpers/constants';

const ImageSlider = ({ images, style }) => {
  const categoryKeys = Object.keys(images);
  const slider = categoryKeys.map((category, i) =>
    <Image key={i}
                  routing={true}
                  style={style}
                  category={category}
                  src={images[category]} />,
  );

  return (
    <div className='title-and-slider'>
      <h3 className='slider-title'>{DISPLAY_NAME[style]}</h3>
      <div className='image-slider'>
        {slider}
        <NavLink to={`/styles/${style}`} className='slider-title see-more'>
          {`See more from ${DISPLAY_NAME[style]}`}
        </NavLink>
      </div>
    </div>
  );
};

export default ImageSlider;