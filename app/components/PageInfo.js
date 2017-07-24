import React from 'react';

const PageInfo = () => {
  console.log(location);
  const firstStyleName = 'Modern';
  const secondStyleName = 'Contemporary';
  const thirdStyleName = 'Traditional';
  const fourthStyleName = 'Other';
  const firstStylePercent = '58%';
  const secondStylePercent = '21%';
  const thirdStylePercent = '14%';
  const fourthStylePercent = '7%';

  const favoritesContent =
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

  const stylesContent = <h2>STYLES</h2>;


  return (
    <div className='page-info'>
      {(location.pathname === '/favorites') && favoritesContent}
      {(location.pathname === '/styles') && stylesContent}
    </div>
  );
};

export default PageInfo;