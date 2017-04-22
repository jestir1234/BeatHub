import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { removeCurrentSong } from '../../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: ownProps.currentSong
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeCurrentSong: () => dispatch(removeCurrentSong())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
