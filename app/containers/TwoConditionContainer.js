import { connect } from 'react-redux';
import Main from '../components/Main';
import { handleFavoriteAction } from '../actions/images';

const mapStateToProps = (state) => {
  // const pageImages = state.images.filter(image =>
  //   image[keys[0]] === this.props.match.params[keys[0]] &&
  //   image[keys[1]] === this.props.match.params[keys[1]]);
  const pageImages = state.images;

  return {
    renderImages: pageImages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFavorite: image => dispatch(handleFavoriteAction(image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
