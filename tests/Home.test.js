import React from 'react';
import { shallow } from 'enzyme';
import Home from '../app/components/Home';

describe('HOME COMPONENT', () => {
  const wrapper = shallow(<Home />);

  it('should render a component element', () => {
    expect(wrapper.find('.home')).toHaveLength(1);
  });

  it('should render Styles & Favorites Nav links', () => {
    expect(wrapper.find('NavLink')).toHaveLength(2);
    expect(wrapper.find('NavLink h4').at(0).text()).toEqual('Compare Styles');
    expect(wrapper.find('NavLink h4').at(1).text()).toEqual('View Favorites');
  });
});