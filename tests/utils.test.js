import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import fetchMock from 'fetch-mock';
import fetchImages from '../app/helpers/apiUtils';
import { calculateStyle, lsSetFavorites, lsGetFavorites } from '../app/helpers/favUtils';
import { randomizeSliders } from '../app/helpers/stylesUtils';
import { IMAGES_API } from '../app/helpers/constants';

describe('UTILS', () => {
  const ls = global.localStorage;

  it('fetchImages should fetch images', () => {
    const response = {
      1: {
        sid: '26568',
        src: 'https://st.hzcdn.com/fimgs/6af14e360a6e0622_7345-w500-h400-b0-p0--shabby-chic-style-dining-room.jpg',
        style: 'shabby-chic-style',
        category: 'dining-room',
      },
    };

    fetchMock.mock(IMAGES_API, response);
    fetchImages();
    expect(fetchMock.calls().unmatched).toEqual([]);
  });

  it('calculateStyle should calcuate the style preference', () => {
    const images = [
      { style: 'contemporary' },
      { style: 'contemporary' },
      { style: 'contemporary' },
      { style: 'contemporary' },
      { style: 'modern' },
      { style: 'modern' },
      { style: 'modern' },
      { style: 'modern' },
      { style: 'victorian' },
      { style: 'victorian' },
      { style: 'victorian' },
      { style: 'industrial' },
    ];
    const expectedResult = [
      {
        style: 'contemporary',
        value: (4 / 12),
      },
      {
        style: 'modern',
        value: (4 / 12),
      },
      {
        style: 'victorian',
        value: (3 / 12),
      },
      {
        style: 'other',
        value: (1 - (11 / 12)),
      },
    ];

    expect(calculateStyle(images)).toEqual(expectedResult);
  });

  it('lsSetFavorites should set favorites to local storage', () => {
    lsSetFavorites(['hi']);
    expect(ls.getItem('favorites')).toEqual(JSON.stringify(['hi']));
  });

  it('lsGetFavorites should get favorites from local storage', () => {
    expect(lsGetFavorites()).toEqual(['hi']);
  });

  it('randomizeSliders should return an object of random images', () => {
    const expected = {
      asian: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'asian' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'asian' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'asian' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'asian' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'asian' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'asian' },
      },
      contemporary: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'contemporary' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'contemporary' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'contemporary' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'contemporary' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'contemporary' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'contemporary' },
      },
      craftsman: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'craftsman' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'craftsman' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'craftsman' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'craftsman' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'craftsman' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'craftsman' },
      },
      farmhouse: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'farmhouse' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'farmhouse' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'farmhouse' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'farmhouse' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'farmhouse' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'farmhouse' },
      },
      industrial: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'industrial' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'industrial' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'industrial' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'industrial' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'industrial' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'industrial' },
      },
      mediterranean: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'mediterranean' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'mediterranean' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'mediterranean' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'mediterranean' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'mediterranean' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'mediterranean' },
      },
      midcentury: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'midcentury' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'midcentury' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'midcentury' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'midcentury' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'midcentury' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'midcentury' },
      },
      modern: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'modern' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'modern' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'modern' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'modern' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'modern' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'modern' },
      },
      rustic: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'rustic' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'rustic' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'rustic' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'rustic' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'rustic' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'rustic' },
      },
      scandinavian: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'scandinavian' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'scandinavian' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'scandinavian' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'scandinavian' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'scandinavian' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'scandinavian' },
      },
      'shabby-chic-style': {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'shabby-chic-style' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'shabby-chic-style' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'shabby-chic-style' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'shabby-chic-style' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'shabby-chic-style' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'shabby-chic-style' },
      },
      victorian: {
        'armchairs-and-accent-chairs': { category: 'armchairs-and-accent-chairs', src: '../assets/no-image-found.jpg', style: 'victorian' },
        'dining-room': { category: 'dining-room', src: '../assets/no-image-found.jpg', style: 'victorian' },
        exterior: { category: 'exterior', src: '../assets/no-image-found.jpg', style: 'victorian' },
        kitchen: { category: 'kitchen', src: '../assets/no-image-found.jpg', style: 'victorian' },
        'living-room': { category: 'living-room', src: '../assets/no-image-found.jpg', style: 'victorian' },
        'pendant-lighting': { category: 'pendant-lighting', src: '../assets/no-image-found.jpg', style: 'victorian' } } };
    expect(randomizeSliders([])).toEqual(expected);
  });
});