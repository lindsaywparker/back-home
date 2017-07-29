import React from 'react';
import { DISPLAY_NAME, PAGE_SUMMARY } from '../helpers/constants';
import { calculateStyle } from '../helpers/favUtils';

const PageInfo = ({ value, title, images }) => {
  let content;

  switch (location.pathname) {
    case '/styles':
      content =
        <container>
          <h2>STYLES</h2>
          <p className='fav-style'>A collection of fundamental design styles you're likely to see</p>
        </container>;
      break;
    case '/favorites':
      if (images.length) {
        const preferenceResults = calculateStyle(images);
        content =
          <container>
            <h2>FAVORITES</h2>
            {preferenceResults.map((result, i) =>
              <div className='style-calc' key={i}>
                <p className='fav-percent'>{Math.round((result.value) * 100)}%</p>
                <p className='fav-style'>{DISPLAY_NAME[result.style]}</p>
              </div>,
            )}
          </container>;
      } else {
        content =
          <container>
            <h2>FAVORITES</h2>
            <p className='fav-style'>YOU'VE NOT SAVED ANY FAVORITES</p>
            <p className='fav-style'>Check out Styles and click the heart on an image to save it here</p>
          </container>;
      }

      break;
    default:
      content =
        <container>
          <h2>{title}</h2>
          <p className='fav-style'>{PAGE_SUMMARY[value]}</p>
        </container>;
  }

  return (
    <div className='page-info'>
      {content}
    </div>
  );
};

export default PageInfo;