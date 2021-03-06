import React from 'react';
import Image from './Image';
import { NavLink } from 'react-router-dom';
import { DISPLAY_NAME } from '../helpers/constants';

const ImageSlider = ({ images, style, favorites, handleFavorite }) => {
  const categoryKeys = Object.keys(images);
  const slider = categoryKeys.map((category, i) =>
    <Image key={i}
           image={images[category]}
           favorite={favorites.find(imageObj => imageObj.sid === images[category].sid)}
           routing={true}
           handleFavorite={handleFavorite}/>,
  );

  return (
    <div className='title-and-slider'>
      <h3 className='slider-title'>{DISPLAY_NAME[style]}</h3>
      <div className='image-slider'>
        {slider}
        <div className='see-more-style'>
          <NavLink to={`/styles/${style}`}>
            {`See more from ${DISPLAY_NAME[style]}`}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;