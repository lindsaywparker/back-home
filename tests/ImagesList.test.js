import React from 'react';
import { shallow } from 'enzyme';
import ImagesList from '../app/components/ImagesList';

describe('IMAGES-LIST COMPONENT', () => {
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
  const wrapper = shallow(<ImagesList images={images}
                                      favorites={[]} />);
  const wrapperLoading = shallow(<ImagesList favorites={[]} />);

  it('should render a component element', () => {
    expect(wrapper.find('.images-list')).toHaveLength(1);
  });

  it('should render a loader when there are no images', () => {
    expect(wrapperLoading.find('.loader')).toHaveLength(1);
    expect(wrapper.find('.loader')).toHaveLength(0);
  });

  it('should map over and render each image', () => {
    expect(wrapper.find('Image')).toHaveLength(3);
  });
});