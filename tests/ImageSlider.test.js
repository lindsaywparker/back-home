import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider from '../app/components/ImageSlider';

describe('IMAGE-SLIDER COMPONENT', () => {
  const images = {
    exterior: {
      sid: '106111',
      src: 'https://st.hzcdn.com/fimgs/bc2116500d308a54_4352-w500-h400-b0-p0-q87--victorian-exterior.jpg',
      style: 'victorian',
      category: 'exterior',
    },
    'living-room': {
      style: 'victorian',
      category: 'living-room',
      src: '../assets/no-image-found.jpg',
    },
    kitchen: {
      sid: '7571553',
      src: 'https://st.hzcdn.com/fimgs/9fa176e002af9ad7_7035-w500-h400-b0-p0--victorian-kitchen.jpg',
      style: 'victorian',
      category: 'kitchen',
    },
    'dining-room': {
      style: 'victorian',
      category: 'dining-room',
      src: '../assets/no-image-found.jpg',
    },
    'pendant-lighting': {
      sid: '8819485',
      src: 'https://st.hzcdn.com/fimgs/9371759d043a29d4_7943-w233-h233-b1-p10--victorian-pendant-lighting.jpg',
      style: 'victorian',
      category: 'pendant-lighting',
    },
    'armchairs-and-accent-chairs': {
      sid: '63644098',
      src: 'https://st.hzcdn.com/fimgs/6a916f8307bb68fe_3500-w233-h233-b1-p10--victorian-armchairs-and-accent-chairs.jpg',
      style: 'victorian',
      category: 'armchairs-and-accent-chairs',
    },
  };
  const wrapper = shallow(<ImageSlider images={images}
                                       style={'victorian'}
                                       favorites={[]} />);

  it('should render a component element', () => {
    expect(wrapper.find('.image-slider')).toHaveLength(1);
  });

  it('should have an appropriately cased title', () => {
    expect(wrapper.find('.slider-title').text()).toEqual('Victorian');
  });

  it('should map over and render each image in the slider', () => {
    expect(wrapper.find('Image')).toHaveLength(6);
  });
});