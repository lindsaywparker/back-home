export const images = (state = [], action) => {
  switch (action.type) {
    case 'IMAGES_FETCH_SUCCESS':
      return [...action.images];

    default:
      return state;
  }
};
