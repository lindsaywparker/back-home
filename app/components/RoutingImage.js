import React from 'react';
import { NavLink } from 'react-router-dom';
import { DISPLAY_NAME } from '../helpers/constants';

const Image = ({ style, category, src }) => {
  return (
    <div>
      <NavLink to={`/styles/${style}/${category}`}>
        <p className='category-name'>{DISPLAY_NAME[category]}</p>
        <img className='image' src={src}/>
      </NavLink>
    </div>
  );
};

export default Image;