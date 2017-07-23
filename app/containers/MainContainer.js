import { connect } from 'react-redux';
import Main from '../components/Main';
import { fetchImagesAction } from '../actions/images';


const mapStateToProps = (state) => {
  return {
    images: state.images,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImagesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
