import React from 'react';

const Image = ({ src }) => {
  return (
    <div>
      <img className='image' src={src}/>
    </div>
  );
};

export default Image;