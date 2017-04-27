import { ADD_SONG_TO_QUEU, REMOVE_SONG_FROM_QUEU, ADD_SONGS_TO_QUEU, REPLACE_QUEU_SONGS} from '../actions/queu_actions';
import merge from 'lodash/merge';


const _emptyQueu = {songQueu: [], currentSongPlaying: null};

const QueuReducer = (oldState = _emptyQueu, action) => {

  switch(action.type){
    case ADD_SONG_TO_QUEU:

      let currentQueue = oldState.songQueu;
      currentQueue.push(action.song);
      let newState = {songQueu: currentQueue, currentSongPlaying: oldState.currentSongPlaying};
      return newState;
     case ADD_SONGS_TO_QUEU:
      let copy2 = merge({}, oldState);
      copy2 = {songQueu: copy2.songQueu.concat(action.songs), currentSongPlaying: oldState.currentSongPlaying};
      return copy2;
     case REMOVE_SONG_FROM_QUEU:
      let copy3 = merge({}, oldState);
      copy3.songQueu.shift();
      return copy3;
    case REPLACE_QUEU_SONGS:
      return {songQueu: action.songs, currentSongPlaying: null};
     default:
      return oldState;
  }
};

export default QueuReducer;
