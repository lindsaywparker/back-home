import React from 'react';
import { NavLink } from 'react-router-dom';
import { DISPLAY_NAME } from '../helpers/constants';

const Image = ({ routing, image }) => {
  const favoriteClass = '';
  // const favoriteClass = 'favorite-active';

  const imageContent = routing ?
    <NavLink to={`/styles/${image.style}/${image.category}`}>
      <p className='category-name'>{DISPLAY_NAME[image.category]}</p>
      <img className='image' src={image.src}/>
    </NavLink>
    :
    <img className='image' src={image.src}/>;

  return (
    <div className='image-with-favorite'>
      <div className={`favorite-icon ${favoriteClass}`} onClick={() => { console.log('clicked favorite'); }}></div>
      {imageContent}
    </div>
  );
};

export default Image;