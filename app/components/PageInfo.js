import React from 'react';
import { PAGE_SUMMARY } from '../helpers/constants';

const PageInfo = ({ value, title }) => {
  return (
    <div className='page-info'>
      <h2 className='page-title'>{title}</h2>
      <p className='subtitle'>{PAGE_SUMMARY[value]}</p>
    </div>
  );
};

export default PageInfo;
