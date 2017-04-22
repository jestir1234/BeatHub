import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { removeCurrentSong } from '../../../actions/song_actions';
import { updatePositionAndDuration, playCurrentSong, pauseCurrentSong, stopCurrentSong } from '../../../actions/current_song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: ownProps.currentSong,
    currentSongStatus: state.currentSongStatus
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeCurrentSong: () => dispatch(removeCurrentSong()),
    updatePositionAndDuration: (positionAndDuration) => dispatch(updatePositionAndDuration(positionAndDuration)),
    playCurrentSong: () => dispatch(playCurrentSong()),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    stopCurrentSong: () => dispatch(stopCurrentSong())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
