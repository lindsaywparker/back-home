// import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
const { routerReducer } = require('react-router-redux');
const { combineReducers } = require('redux');
const { imagesErrored, imagesLoading, images } = require('./images-reducers');

const rootReducer = combineReducers({
  imagesErrored,
  imagesLoading,
  images,
  router: routerReducer(),
});

// export default rootReducer;
module.exports = rootReducer;