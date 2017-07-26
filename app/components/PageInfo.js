import React from 'react';
import { PAGE_SUMMARY } from '../helpers/constants';

const PageInfo = ({ value, title }) => {
  const firstStyleName = 'Modern';
  const secondStyleName = 'Contemporary';
  const thirdStyleName = 'Traditional';
  const fourthStyleName = 'Other';
  const firstStylePercent = '58%';
  const secondStylePercent = '21%';
  const thirdStylePercent = '14%';
  const fourthStylePercent = '7%';
  let content;

  switch (location.pathname) {
    case '/styles':
      content =
        <container>
          <h2>STYLES</h2>
          <p className='fav-style'>Awesome info about this page</p>
        </container>;
      break;
    case '/favorites':
      // {} = calculateStyle();
      content =
        <container>
          <h2>FAVORITES</h2>
          <div className='style-calc'>
            <p className='fav-percent'>{firstStylePercent}</p>
            <p className='fav-style'>{firstStyleName}</p>
          </div>
          <div className='style-calc'>
            <p className='fav-percent'>{secondStylePercent}</p>
            <p className='fav-style'>{secondStyleName}</p>
          </div>
          <div className='style-calc'>
            <p className='fav-percent'>{thirdStylePercent}</p>
            <p className='fav-style'>{thirdStyleName}</p>
          </div>
          <div className='style-calc'>
            <p className='fav-percent'>{fourthStylePercent}</p>
            <p className='fav-style'>{fourthStyleName}</p>
          </div>
        </container>;
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