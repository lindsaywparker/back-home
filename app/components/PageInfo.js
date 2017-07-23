import React from 'react';

const PageInfo = () => {
  const pageTitle = 'FAVORITES';
  const firstStyleName = 'Modern';
  const secondStyleName = 'Contemporary';
  const thirdStyleName = 'Traditional';
  const fourthStyleName = 'Other';
  const firstStylePercent = '58%';
  const secondStylePercent = '21%';
  const thirdStylePercent = '14%';
  const fourthStylePercent = '7%';

  return (
    <div className='page-info'>
      <h2>{pageTitle}</h2>
      <container>
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
      </container>
    </div>
  );
};

export default PageInfo;