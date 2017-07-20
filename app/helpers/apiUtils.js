const fetchImages = () => {
  return fetch('/api/images')
    .then(response => response.json());
};

export default fetchImages;