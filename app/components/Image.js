import React from 'react';
import { NavLink } from 'react-router-dom';
import { DISPLAY_NAME } from '../helpers/constants';

const Image = ({ routing, style, category, src }) => {
  const favoriteClass = '';
  // const favoriteClass = 'favorite-active';

  const imageContent = routing ?
    <NavLink to={`/styles/${style}/${category}`}>
      <p className='category-name'>{DISPLAY_NAME[category]}</p>
      <img className='image' src={src}/>
    </NavLink>
    :
    <img className='image' src={src}/>;

  return (
    <div className='image-with-favorite'>
      <div className={`favorite-icon ${favoriteClass}`} onClick={() => { console.log('clicked favorite'); }}></div>
      {imageContent}
    </div>
  );
};

export default Image;