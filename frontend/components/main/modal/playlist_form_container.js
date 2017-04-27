import { connect } from 'react-redux';
import { createPlaylist } from "../../../actions/playlist_actions";
import PlaylistForm from './playlist_form';
import { receivePresentationItem } from '../../../actions/presentation_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    presentationItem: state.presentationItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    receivePresentationItem: (presentationItem, presentationType) => dispatch(receivePresentationItem(presentationItem, presentationType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
