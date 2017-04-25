import { connect } from 'react-redux';
import SimpleSlider from './simple_slider';
import { fetchRandomAlbums } from '../../../../actions/album_actions';
import { receivePresentationItem } from '../../../../actions/presentation_actions';

const mapStateToProps = (state) => {
  return {
    featuredAlbums: state.featured
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomAlbums: () => dispatch(fetchRandomAlbums()),
    receivePresentationItem: (presentationItem, type) => dispatch(receivePresentationItem(presentationItem, type))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleSlider);
