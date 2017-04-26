import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { removeCurrentSong, receiveCurrentSong } from '../../../actions/song_actions';
import { updatePositionAndDuration, playCurrentSong, pauseCurrentSong, stopCurrentSong } from '../../../actions/current_song_actions';
import { removeSongFromQueu } from '../../../actions/queu_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentSong: state.songs.currentSong,
    currentSongStatus: state.currentSongStatus,
    queu: state.queu
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeCurrentSong: () => dispatch(removeCurrentSong()),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    updatePositionAndDuration: (positionAndDuration) => dispatch(updatePositionAndDuration(positionAndDuration)),
    playCurrentSong: () => dispatch(playCurrentSong()),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    stopCurrentSong: () => dispatch(stopCurrentSong()),
    removeSongFromQueu: () => dispatch(removeSongFromQueu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
