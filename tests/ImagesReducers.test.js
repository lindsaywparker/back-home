import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import { images, sliderImages, favorites, isLoading } from '../app/reducers/images-reducers';
import { randomizeSliders } from '../app/helpers/stylesUtils';

describe('REDUCERS', () => {
  const ls = global.localStorage;

  it('should have initial state', () => {
    expect(images(undefined, { type: '' })).toEqual([]);
    expect(sliderImages(undefined, { type: '' })).toEqual({});
    expect(favorites(undefined, { type: '' })).toEqual([]);
    expect(isLoading(undefined, { type: '' })).toEqual(true);
  });

  it('should not affect state', () => {
    expect(images(undefined, { type: 'DOESNT_EXIST' })).toEqual([]);
    expect(sliderImages(undefined, { type: 'DOESNT_EXIST' })).toEqual({});
    expect(favorites(undefined, { type: 'DOESNT_EXIST' })).toEqual([]);
    expect(isLoading(undefined, { type: 'DOESNT_EXIST' })).toEqual(true);
  });

  it('should handle IMAGES_FETCH_SUCCESS', () => {
    expect(images(undefined, {
      type: 'IMAGES_FETCH_SUCCESS',
      images: {
        1234: 'image data',
        5678: 'second image data',
      },
    })).toEqual(['image data', 'second image data']);
  });

  it('should handle RANDOMIZE_SLIDERS', () => {
    expect(sliderImages(undefined, {
      type: 'RANDOMIZE_SLIDERS',
      images: {},
    })).toEqual(randomizeSliders({}));
  });

  it('should handle HANDLE_FAVORITE', () => {
    expect(favorites([], {
      type: 'HANDLE_FAVORITE',
      image: { sid: 1 },
    })).toEqual([{ sid: 1 }]);

    expect(favorites([{ sid: 1 }], {
      type: 'HANDLE_FAVORITE',
      image: { sid: 1 },
    })).toEqual([]);
  });

  it('should handle IS_LOADING', () => {
    expect(isLoading(true, {
      type: 'IS_LOADING',
      isLoading: false,
    })).toEqual(false);
  });
});