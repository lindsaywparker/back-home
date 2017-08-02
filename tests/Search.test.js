import React from 'react';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import Search from '../app/components/Search';
import { sliderImages } from './mockData.js';

describe('SEARCH COMPONENT', () => {
  const wrapper = shallow(<Search />);

  it('should render a component element', () => {
    expect(wrapper.find('.search')).toHaveLength(1);
  });

  it.skip('should render ImagesList', () => {
    expect(wrapper.find('ImagesList')).toHaveLength(1);
  });
});
