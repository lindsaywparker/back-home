import fetchImages from '../helpers/apiUtils';

export const fetchImagesAction = () => {
  return (dispatch) => {
    console.log(fetchImages());
    return fetchImages();
  };
};