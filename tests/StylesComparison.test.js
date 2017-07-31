import React from 'react';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import StylesComparison from '../app/components/StylesComparison';
import { sliderImages } from './mockData.js';

describe('STYLES COMPARISON COMPONENT', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<StylesComparison isLoading={false}
                                            sliderImages={sliderImages}
                                            handleFavorite={mockFn}/>);
  const wrapperLoading = shallow(<StylesComparison isLoading={true}
                                                   sliderImages={sliderImages}
                                                   handleFavorite={mockFn}/>);

  it('should render a component element', () => {
    expect(wrapper.find('.styles-comparison')).toHaveLength(1);
  });

  it('should render PageInfo', () => {
    expect(wrapper.find('PageInfo')).toHaveLength(1);
  });

  it('should render a loader when isLoading is true', () => {
    expect(wrapperLoading.find('.loader-container')).toHaveLength(1);
    expect(wrapper.find('.loader-container')).toHaveLength(0);
  });

  it('should render imageSliders when isLoading is false', () => {
    expect(wrapperLoading.find('ImageSlider')).toHaveLength(0);
    expect(wrapper.find('ImageSlider')).toHaveLength(12);
  });


  it('should call fetchImages on mount', () => {
    const mountWrapper = mount(<StylesComparison isLoading={true}
                                                 fetchImages={mockFn}/>);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});