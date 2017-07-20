import { connect } from 'react-redux';
import App from '../components/App';
// import { scrapeImagesAction } from '../actions/images';

const mapDispatchToProps = (dispatch) => {
  return {
    scrapeImages: () => dispatch(scrapeImagesAction()),
  };
};

export default connect(null, mapDispatchToProps)(App);
