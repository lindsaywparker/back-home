import { randomizeSliders } from '../helpers/stylesUtils';
import { lsSetFavorites, lsGetFavorites } from '../helpers/favUtils';

export const images = (state = [], action) => {
  switch (action.type) {
    case 'IMAGES_FETCH_SUCCESS':
      return Object.keys(action.images).map(key => action.images[key]);

    default:
      return state;
  }
};

export const sliderImages = (state = {}, action) => {
  switch (action.type) {
    case 'RANDOMIZE_SLIDERS':
      return randomizeSliders(action.images);

    default:
      return state;
  }
};

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'HANDLE_FAVORITE':
      let newState = [];
      const index = state.findIndex(image => image.sid === action.image.sid);
      if (index === -1) {
        newState = [...state, action.image];
        lsSetFavorites(newState);
        return newState;
      }
      newState = state.filter(image => image.sid !== action.image.sid);
      lsSetFavorites(newState);
      return [...newState];

    case 'GET_FAVORITES':
      return lsGetFavorites();

    default:
      return state;
  }
};

export const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
};