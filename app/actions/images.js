import fetchImages from '../helpers/apiUtils';

export const fetchImagesAction = () => {
  return (dispatch) => {
    return fetchImages()
      .then((images) => {
        dispatch(imagesFetchSuccess(images));
      });
  };
};

export const imagesFetchSuccess = (images) => {
  return {
    type: 'IMAGES_FETCH_SUCCESS',
    images,
  };
};