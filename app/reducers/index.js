import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { images, favorites, isLoading } from './images-reducers';

const rootReducer = combineReducers({
  images,
  favorites,
  isLoading,
  router: routerReducer(),
});

export default rootReducer;