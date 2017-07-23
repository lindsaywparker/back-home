import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { images, isLoading } from './images-reducers';

const rootReducer = combineReducers({
  images,
  isLoading,
  router: routerReducer(),
});

export default rootReducer;