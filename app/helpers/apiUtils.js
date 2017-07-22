import { IMAGES_API } from './constants';

const fetchImages = () => {
  return fetch(IMAGES_API)
    .then(response => response.json());
};

export default fetchImages;