export const imagesErrored = (state = false, action) => {
  switch (action.type) {
  //   case 'ITEMS_HAS_ERRORED':
  //     return action.hasErrored;

    default:
      return state;
  }
};

export const imagesLoading = (state = false, action) => {
  switch (action.type) {
    // case 'ITEMS_IS_LOADING':
    //   return action.isLoading;

    default:
      return state;
  }
};

export const images = (state = [], action) => {
  switch (action.type) {
    // case 'ITEMS_FETCH_DATA_SUCCESS':
    //   return [...state, ...action.items];

    default:
      return state;
  }
};
