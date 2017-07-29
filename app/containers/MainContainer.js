import { connect } from 'react-redux';
import Main from '../components/Main';
import { fetchImagesAction, handleFavoriteAction } from '../actions/images';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
