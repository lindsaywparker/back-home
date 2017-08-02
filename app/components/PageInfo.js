import React from 'react';
import { PAGE_SUMMARY } from '../helpers/constants';

const PageInfo = ({ type, title }) => {
  return (
    <div className='page-info'>
      <h2 className='page-title'>{title}</h2>
      <p className='subtitle'>{PAGE_SUMMARY[type]}</p>
    </div>
  );
};

export default PageInfo;
