import React from 'react';
import Image from './Image';


const ImagesList = ({ isLoading, images, favorites, handleFavorite }) => {
  const representativeImages = isLoading ?
    <img className='loader' src='../assets/loader.gif' alt='Loading...' />
    :
    images.map((image, i) =>
      <Image key={i}
        image={image}
        favorite={favorites.find(imageObj => imageObj.sid === image.sid)}
        routing={false}
        handleFavorite={handleFavorite} />);

  return (
    <div className='images-list'>
      {representativeImages}
    </div>
  );
};

export default ImagesList;