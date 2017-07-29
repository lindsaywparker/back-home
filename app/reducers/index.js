import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { images, sliderImages, favorites, isLoading } from './images-reducers';

const rootReducer = combineReducers({
  images,
  sliderImages,
  favorites,
  isLoading,
  router: routerReducer(),
});

export default rootReducer;