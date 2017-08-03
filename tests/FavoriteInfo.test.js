import React from 'react';
import { shallow, mount } from 'enzyme';
import FavoriteInfo from '../app/components/FavoriteInfo';

describe('FAVORITE-INFO COMPONENT', () => {
  const images = [
    {
      sid: '106111',
      src: 'https://st.hzcdn.com/fimgs/bc2116500d308a54_4352-w500-h400-b0-p0-q87--victorian-exterior.jpg',
      style: 'victorian',
      category: 'exterior',
    },
    {
      style: 'contemporary',
      category: 'exterior',
      src: '../assets/no-image-found.jpg',
    },
    {
      sid: '7571553',
      src: 'https://st.hzcdn.com/fimgs/9fa176e002af9ad7_7035-w500-h400-b0-p0--victorian-kitchen.jpg',
      style: 'victorian',
      category: 'kitchen',
    },
  ];
  const wrapper = shallow(<FavoriteInfo value={'hi'}
                                    title={'hey'}
                                    images={images} />);

  it('should render a component', () => {
    expect(wrapper.find('.page-info')).toHaveLength(1);
  });

  it('should show a title', () => {
    expect(wrapper.find('.page-title')).toHaveLength(1);
  });

  it('should show a favorite percentage', () => {
    expect(wrapper.find('.fav-percent')).toHaveLength(2);
  });

  it('should show a favorite style', () => {
    expect(wrapper.find('.fav-style')).toHaveLength(2);
  });
});
