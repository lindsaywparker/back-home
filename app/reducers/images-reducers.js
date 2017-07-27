export const images = (state = [], action) => {
  switch (action.type) {
    case 'IMAGES_FETCH_SUCCESS':
      return Object.keys(action.images).map(key => action.images[key]);

    default:
      return state;
  }
};

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'HANDLE_FAVORITE':
      const index = state.findIndex(image => image.sid === action.image.sid);
      console.log('reducer', index);
      if (index === -1) {
        return [...state, action.image];
      }
      const newState = state.splice(index, 1);
      return [...newState];

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