import fetchImages from '../helpers/apiUtils';

export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool,
  };
};

export const imagesFetchSuccess = (images) => {
  return {
    type: 'IMAGES_FETCH_SUCCESS',
    images,
  };
};

export const randomizeSliders = (images) => {
  return {
    type: 'RANDOMIZE_SLIDERS',
    images,
  };
};

export const handleFavoriteAction = (image) => {
  return {
    type: 'HANDLE_FAVORITE',
    image,
  };
};

export const getFavoritesAction = () => {
  return {
    type: 'GET_FAVORITES',
  };
};

export const fetchImagesAction = () => {
  return (dispatch) => {
    return fetchImages()
    .then((images) => {
      dispatch(imagesFetchSuccess(images));
      dispatch(randomizeSliders(images));
      dispatch(getFavoritesAction());
      dispatch(isLoading(false));
    });
  };
};
