import React from 'react';
import { NavLink } from 'react-router-dom';
import { DISPLAY_NAME } from '../helpers/constants';

const Image = ({ image, routing, handleFavorite }) => {
  const handleFavoriteClick = () => {
    handleFavorite(image);
  };

  const favoriteClass = image.favorite ? 'favorite-active' : '';

  const imageContent = routing ?
    <NavLink to={`/styles/${image.style}/${image.category}`}>
      <img className='image' src={image.src}/>
      <p className='category-name'>{DISPLAY_NAME[image.category]}</p>
    </NavLink>
    :
    <img className='image' src={image.src}/>;

  return (
    <div className='image-with-favorite'>
      <div className={`favorite-icon ${favoriteClass}`}
           onClick={handleFavoriteClick}>
      </div>
      {imageContent}
    </div>
  );
};

export default Image;