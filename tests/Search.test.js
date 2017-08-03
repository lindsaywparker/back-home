import React from 'react';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import Search from '../app/components/Search';
import { sliderImages } from './mockData.js';

describe('SEARCH COMPONENT', () => {
  const images = [
    {
      sid: '106111',
      src: 'https://st.hzcdn.com/fimgs/bc2116500d308a54_4352-w500-h400-b0-p0-q87--victorian-exterior.jpg',
      style: 'victorian',
      category: 'exterior',
    },
    {
      style: 'victorian',
      category: 'living-room',
      src: '../assets/no-image-found.jpg',
    },
    {
      sid: '7571553',
      src: 'https://st.hzcdn.com/fimgs/9fa176e002af9ad7_7035-w500-h400-b0-p0--victorian-kitchen.jpg',
      style: 'victorian',
      category: 'kitchen',
    },
    {
      style: 'victorian',
      category: 'dining-room',
      src: '../assets/no-image-found.jpg',
    },
    {
      sid: '8819485',
      src: 'https://st.hzcdn.com/fimgs/9371759d043a29d4_7943-w233-h233-b1-p10--victorian-pendant-lighting.jpg',
      style: 'victorian',
      category: 'pendant-lighting',
    },
    {
      sid: '63644098',
      src: 'https://st.hzcdn.com/fimgs/6a916f8307bb68fe_3500-w233-h233-b1-p10--victorian-armchairs-and-accent-chairs.jpg',
      style: 'victorian',
      category: 'armchairs-and-accent-chairs',
    },
  ];
  const mockFn = jest.fn();
  const wrapper = shallow(<Search images={images} handleFavorite={mockFn}/>);
  const searchInput = wrapper.find('.search-input');

  it('should render a component element with title and search field', () => {
    expect(wrapper.find('.search')).toHaveLength(1);
    expect(wrapper.find('.page-title')).toHaveLength(1);
    expect(wrapper.find('.search-input')).toHaveLength(1);
  });

  it('should render ImagesList', () => {
    expect(wrapper.find('ImagesList')).toHaveLength(1);
  });

  it('should have an initial state', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      searchTerm: [''],
    });
  });

  it('should handleFilter', () => {
    searchInput.simulate('change', { target: { value: 'modern kitchen' } });
    expect(wrapper.state()).toEqual({
      input: 'modern kitchen',
      searchTerm: ['modern', 'kitchen'],
    });
  });

  it('should clearSearchInput', () => {
    const clearSearch = wrapper.find('.clear-search-img');
    clearSearch.simulate('click');
    expect(wrapper.state()).toEqual({
      input: '',
      searchTerm: [''],
    });
  });

  it('should fetchImages if store is empty', () => {
    const emptyWrapper = mount(<Search images={[]} fetchImages={mockFn} handleFavorite={mockFn}/>);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should filter images', () => {
    searchInput.simulate('change', { target: { value: 'exterior' } });
    expect(wrapper.find('ImagesList').props().images).toEqual([
      {
        sid: '106111',
        src: 'https://st.hzcdn.com/fimgs/bc2116500d308a54_4352-w500-h400-b0-p0-q87--victorian-exterior.jpg',
        style: 'victorian',
        category: 'exterior',
      },
    ]);
  });
});
