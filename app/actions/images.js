import fetchImages from '../helpers/apiUtils';

export const fetchImagesAction = () => {
  return (dispatch) => {
    console.log('actions says hi, and ', fetchImages());
    return fetchImages();
  };
};