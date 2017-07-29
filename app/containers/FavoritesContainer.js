import { connect } from 'react-redux';
import Main from '../components/Main';
import { handleFavoriteAction } from '../actions/images';

const mapStateToProps = (state) => {
  return {
    images: state.favorites,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFavorite: image => dispatch(handleFavoriteAction(image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
