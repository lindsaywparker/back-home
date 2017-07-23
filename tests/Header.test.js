import React from 'react';
import { shallow } from 'enzyme';
import Header from '../app/components/Header';

describe('HEADER COMPONENT', () => {
  const wrapper = shallow(<Header />);

  it('should render a component element', () => {
    expect(wrapper.find('.header')).toHaveLength(1);
  });

  it('should render the app title, "Back Home"', () => {
    expect(wrapper.find('h1').text()).toEqual('BACK HOME');
  });

  it('should render zero Nav Links when on the home page', () => {
    const wrapper = shallow(<Header location={{ pathname: '/' }} />);

    expect(wrapper.find('.header-btn')).toHaveLength(0);
  });

  it.skip('should render a Favorites Nav Link when on styles page', () => {

  });

  it.skip('should render Styles & Favorites Nav links when on a style or category page', () => {

  });

  it.skip('should ...', () => {

  });
});