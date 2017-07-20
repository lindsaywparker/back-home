import { connect } from 'react-redux';
import StylesComparison from '../components/StylesComparison';
import { fetchImagesAction } from '../actions/images';

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImagesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StylesComparison);