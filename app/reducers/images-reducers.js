export const images = (state = [], action) => {
  switch (action.type) {
    case 'IMAGES_FETCH_SUCCESS':
      const keys = Object.keys(action.images);
      return keys.map(key => action.images[key]);

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