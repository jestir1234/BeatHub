import { connect } from 'react-redux';
import RightClickMenu from './right_click_menu';
import { createSongToPlaylist, deleteSongFromPlaylist } from '../../../actions/playlist_songs_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    song: ownProps.song
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSongToPlaylist: (playlistSong) => dispatch(createSongToPlaylist(playlistSong)),
    deleteSongFromPlaylist: (playlistSongId) => dispatch(deleteSongFromPlaylist(playlistSongId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightClickMenu);
