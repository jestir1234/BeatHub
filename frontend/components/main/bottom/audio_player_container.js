import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { removeCurrentSong } from '../../../actions/song_actions';
import { updatePositionAndDuration } from '../../../actions/current_song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: ownProps.currentSong,
    currentSongStatus: state.currentSongStatus
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeCurrentSong: () => dispatch(removeCurrentSong()),
    updatePositionAndDuration: (positionAndDuration) => dispatch(updatePositionAndDuration(positionAndDuration))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
