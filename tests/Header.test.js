import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import Header from '../app/components/Header';

describe('HEADER COMPONENT', () => {
  const wrapper = shallow(<Header location={{ pathname: '/' }}/>);

  it('should render a component element', () => {
    expect(wrapper.find('.header')).toHaveLength(1);
  });

  it('should render the app title, "Back Home"', () => {
    expect(wrapper.find('h1').text()).toEqual('BACK HOME');
  });

  it('should render two Nav Links when on the home page', () => {
    expect(wrapper.find('.nav-btn')).toHaveLength(2);
  });

  it('should render a Favorites Nav Link when on styles page', () => {
    const stylesWrapper = shallow(<Header location={{ pathname: '/styles' }}/>);

    expect(stylesWrapper.find('.nav-btn')).toHaveLength(1);
    expect(stylesWrapper.find('.nav-btn').text()).toEqual('Favorites');
  });

  it('should render a Styles Nav Link when on favorites page', () => {
    const stylesWrapper = shallow(<Header location={{ pathname: '/favorites' }}/>);

    expect(stylesWrapper.find('.nav-btn')).toHaveLength(1);
    expect(stylesWrapper.find('.nav-btn').text()).toEqual('Styles');
  });

  it('should render Styles & Favorites Nav links when on a style or category page', () => {
    const stylesWrapper = shallow(<Header location={{ pathname: '/styles/contemporary' }}/>);

    expect(stylesWrapper.find('.nav-btn')).toHaveLength(2);
    expect(stylesWrapper.find('.nav-btn').at(0).text()).toEqual('Styles');
    expect(stylesWrapper.find('.nav-btn').at(1).text()).toEqual('Favorites');
  });
});