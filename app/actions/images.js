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

export const fetchImagesAction = () => {
  return (dispatch) => {
    return fetchImages()
      .then((images) => {
        dispatch(imagesFetchSuccess(images));
        dispatch(isLoading(false));
      });
  };
};

