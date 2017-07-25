import React from 'react';
import { NavLink } from 'react-router-dom';

const Image = ({ style, category, src }) => {
  return (
    <div>
      <NavLink to={`/styles/${style}/${category}`}>
        <p className='category-name'>{category}</p>
        <img className='image' src={src}/>
      </NavLink>
    </div>
  );
};

export default Image;