import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import App from '../app/components/App';

describe('APP COMPONENT', () => {
  const wrapper = shallow(<App />);

  it('should render a component element', () => {
    expect(wrapper.find('.app')).toHaveLength(1);
  });

  it('should render Header', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('should render Routes', () => {
    expect(wrapper.find('Route')).toHaveLength(5);
  });
});