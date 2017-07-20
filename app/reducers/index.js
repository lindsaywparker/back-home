import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { imagesErrored, imagesLoading, images } from './images-reducers';

const rootReducer = combineReducers({
  imagesErrored,
  imagesLoading,
  images,
  router: routerReducer(),
});

export default rootReducer;