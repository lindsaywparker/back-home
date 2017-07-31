import * as actions from '../app/actions/images';

describe('ACTIONS', () => {
  it('isLoading should return a boolean', () => {
    const action = actions.isLoading(false);

    expect(action.isLoading).toEqual(false);
    expect(action.type).toEqual('IS_LOADING');
  });

  it('imagesFetchSuccess should return an object', () => {
    const action = actions.imagesFetchSuccess({ 1234: 'image-data' });

    expect(action.images).toEqual({ 1234: 'image-data' });
    expect(action.type).toEqual('IMAGES_FETCH_SUCCESS');
  });

  it('randomizeSliders should return an object', () => {
    const action = actions.randomizeSliders({ 1234: 'image-data' });

    expect(action.images).toEqual({ 1234: 'image-data' });
    expect(action.type).toEqual('RANDOMIZE_SLIDERS');
  });

  it('handleFavoriteAction should return an object', () => {
    const action = actions.handleFavoriteAction({ 1234: 'image-data' });

    expect(action.image).toEqual({ 1234: 'image-data' });
    expect(action.type).toEqual('HANDLE_FAVORITE');
  });

  it('getFavoritesAction should return a type only', () => {
    const action = actions.getFavoritesAction();

    expect(action.type).toEqual('GET_FAVORITES');
  });
});
