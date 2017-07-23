import React from 'react';
import { shallow } from 'enzyme';
import Image from '../app/components/Image';

describe('IMAGE COMPONENT', () => {
  const wrapper = shallow(<Image src={'hi I\'m a source'}/>);

  it('should render a component element', () => {
    expect(wrapper.find('.image')).toHaveLength(1);
  });

  it('should have a src attribute', () => {
    expect(wrapper.find('.image').props().src).toEqual('hi I\'m a source');
  });
});