import React from 'react';
import Image from './Image';


const ImagesList = ({ isLoading, images, handleFavorite }) => {
  const representativeImages = isLoading ?
    <img className='loader' src='../assets/loader.gif' alt='Loading...' /> :
    images.filter(image => image)
          .map((image, i) => <Image key={i}
                                    image={image}
                                    routing={false}
                                    handleFavorite={handleFavorite}/>);

  return (
    <div className='images-list'>
      {representativeImages}
    </div>
  );
};

export default ImagesList;