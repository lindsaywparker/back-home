import React from 'react';
import Image from './Image';


const ImageSlider = ({ images, style }) => {
  const catKeys = Object.keys(images);
  const slider = catKeys.map((category, i) => {
    return <Image key={i} category={category} src={images[category]} />;
  });

  return (
    <div className='title-and-slider'>
      <div className='slider-title'>{style}</div>
      <div className='image-slider'>
        {slider}
      </div>
    </div>
  );
};

export default ImageSlider;