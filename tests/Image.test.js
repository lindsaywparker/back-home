import React from 'react';
import { shallow } from 'enzyme';
import Image from '../app/components/Image';

describe('IMAGE COMPONENT', () => {
  const images = {
    'pendant-lighting': {
      sid: '8819485',
      src: 'https://st.hzcdn.com/fimgs/9371759d043a29d4_7943-w233-h233-b1-p10--victorian-pendant-lighting.jpg',
      style: 'victorian',
      category: 'pendant-lighting',
    },
  };

  const mockFn = jest.fn();
  const wrapper = shallow(<Image image={images['pendant-lighting']}
                                 favorite={false}
                                 routing={false}
                                 handleFavorite={mockFn} />);
  const routingWrapper = shallow(<Image image={images['pendant-lighting']}
                                        favorite={false}
                                        routing={true}
                                        handleFavorite={mockFn} />);
  const favoriteWrapper = shallow(<Image image={images['pendant-lighting']}
                                         favorite={true}
                                         routing={true}
                                         handleFavorite={mockFn} />);

  it('should render a component element', () => {
    expect(wrapper.find('.image')).toHaveLength(1);
  });

  it('should have a src attribute', () => {
    expect(wrapper.find('.image').props().src).toEqual('https://st.hzcdn.com/fimgs/9371759d043a29d4_7943-w233-h233-b1-p10--victorian-pendant-lighting.jpg');
  });

  it('should have a favorite icon that calls `handleFavorite()` on click', () => {
    wrapper.find('.favorite-icon').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should add class `favorite-active` if the image is in favorites', () => {
    expect(wrapper.find('.favorite-active')).toHaveLength(0);
    expect(favoriteWrapper.find('.favorite-active')).toHaveLength(1);
  });

  it('should be a NavLink and display an appropriately cased name if routing is true', () => {
    expect(wrapper.find('NavLink')).toHaveLength(0);
    expect(wrapper.find('.category-name')).toHaveLength(0);
    expect(routingWrapper.find('NavLink')).toHaveLength(1);
    expect(routingWrapper.find('.category-name').text()).toEqual('Pendant Lighting');
  });
});