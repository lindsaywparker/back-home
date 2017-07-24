import React from 'react';

const Image = ({ category, src }) => {
  return (
    <div>
      <p className='category-name'>{category}</p>
      <img className='image' src={src}/>
    </div>
  );
};

export default Image;