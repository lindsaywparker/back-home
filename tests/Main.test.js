import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../app/components/Main';

describe('MAIN COMPONENT', () => {
  const images = [
    {
      sid: '106111',
      src: 'https://st.hzcdn.com/fimgs/bc2116500d308a54_4352-w500-h400-b0-p0-q87--victorian-exterior.jpg',
      style: 'victorian',
      category: 'exterior',
    },
    {
      style: 'contemporary',
      category: 'exterior',
      src: '../assets/no-image-found.jpg',
    },
    {
      sid: '7571553',
      src: 'https://st.hzcdn.com/fimgs/9fa176e002af9ad7_7035-w500-h400-b0-p0--victorian-kitchen.jpg',
      style: 'victorian',
      category: 'kitchen',
    },
  ];
  const mockFn = jest.fn();
  const mockFn2 = jest.fn();
  const wrapperOneCond = shallow(<Main type={'victorian'}
                                       images={images}
                                       handleFavorite={mockFn}
                                       getFavorites={mockFn2} />);
  const wrapperTwoCond = shallow(<Main style={'victorian'}
                                       category={'exterior'}
                                       images={images}
                                       handleFavorite={mockFn}
                                       getFavorites={mockFn2} />);

  it('should render a component element including PageInfo and ImagesList', () => {
    expect(wrapperOneCond.find('.main')).toHaveLength(1);
    expect(wrapperOneCond.find('PageInfo')).toHaveLength(1);
    expect(wrapperOneCond.find('ImagesList')).toHaveLength(1);
  });

  it('should call getFavorites on DidMount', () => {
    const wrapperMount = mount(<Main type={'hi'}
                                     images={images}
                                     handleFavorite={mockFn}
                                     getFavorites={mockFn2} />);

    expect(mockFn2).toHaveBeenCalledTimes(1);
  });

  it('should filter images by type', () => {
    expect(wrapperOneCond.find('ImagesList').props().images).toEqual([
      {
        sid: '106111',
        src: 'https://st.hzcdn.com/fimgs/bc2116500d308a54_4352-w500-h400-b0-p0-q87--victorian-exterior.jpg',
        style: 'victorian',
        category: 'exterior',
      },
      {
        sid: '7571553',
        src: 'https://st.hzcdn.com/fimgs/9fa176e002af9ad7_7035-w500-h400-b0-p0--victorian-kitchen.jpg',
        style: 'victorian',
        category: 'kitchen',
      },
    ]);
  });

  it('should filter images by style & category', () => {
    expect(wrapperTwoCond.find('ImagesList').props().images).toEqual([
      {
        sid: '106111',
        src: 'https://st.hzcdn.com/fimgs/bc2116500d308a54_4352-w500-h400-b0-p0-q87--victorian-exterior.jpg',
        style: 'victorian',
        category: 'exterior',
      },
    ]);
  });
});