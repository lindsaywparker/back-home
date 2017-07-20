import React from 'react';

const Image = ({ src }) => {
  console.log('src', src);
  return (
    <div>
      <img src={src}/>
    </div>
  );
};

export default Image;