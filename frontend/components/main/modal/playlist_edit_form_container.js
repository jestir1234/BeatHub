import { connect } from 'react-redux';
import { updatePlaylist } from "../../../actions/playlist_actions";
import { receivePresentationItem } from "../../../actions/presentation_actions";
import PlaylistEditForm from './playlist_edit_form';

const mapStateToProps = (state, ownProps) => {
  let status = state.playlists.status ? state.playlists.status : null;
  return {
    currentUser: state.session.currentUser,
    currentPlaylist: ownProps.currentPlaylist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    receivePresentationItem: (presentationItem, presentationType) => dispatch(receivePresentationItem(presentationItem, presentationType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistEditForm);
