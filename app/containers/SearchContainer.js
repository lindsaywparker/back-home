import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchImagesAction, handleFavoriteAction, getFavoritesAction } from '../actions/images';

const mapStateToProps = (state) => {
  return {
    images: state.images,
    isLoading: state.isLoading,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImagesAction()),
    handleFavorite: image => dispatch(handleFavoriteAction(image)),
    getFavorites: () => dispatch(getFavoritesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
