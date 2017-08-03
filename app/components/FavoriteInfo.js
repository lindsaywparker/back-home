import React from 'react';
import { DISPLAY_NAME } from '../helpers/constants';
import { calculateStyle } from '../helpers/favUtils';

const FavoriteInfo = ({ images }) => {
  const preferenceResults = images ? calculateStyle(images) : [];

  return (
    <div className='page-info'>
      <h2 className='page-title'>FAVORITES</h2>
      {images ? preferenceResults.map((result, i) =>
        <div className='style-calc' key={i}>
          <p className='fav-percent'>{Math.round((result.value) * 100)}%</p>
          <p className='fav-style'>{DISPLAY_NAME[result.style]}</p>
        </div>)
      :
      <div>
        <p className='subtitle'>YOU'VE NOT SAVED ANY FAVORITES</p>
        <p className='subtitle'>Check out Styles and click the heart on an image to save it here</p>
      </div>
      }
    </div>
  );
};

export default FavoriteInfo;
