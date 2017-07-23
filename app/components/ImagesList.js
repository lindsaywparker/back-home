import React from 'react';
import Image from './Image';


const ImagesList = ({ isLoading, images }) => {
  const representativeImages = isLoading ?
    <img className='loader' src='../assets/loader.gif' alt='Loading...' /> :
    images.filter((image) => {
      return image;
    }).map((image, i) => {
      return <Image key={i} src={image.src} />;
    });

  return (
    <div className='images-list'>
      {representativeImages}
    </div>
  );
};

export default ImagesList;