import { ADD_SONG_TO_QUEU, REMOVE_SONG_FROM_QUEU } from '../actions/queu_actions';
import merge from 'lodash/merge';


const _emptyQueu = {songQueu: [], currentSongPlaying: null};

const QueuReducer = (oldState = _emptyQueu, action) => {
  switch(action.type){
    case ADD_SONG_TO_QUEU:
      let copy = merge({}, oldState);
      copy.songQueu.push(action.song);
      return copy;
     case ADD_SONGS_TO_QUEU:
      let copy2 = merge({}, oldState);
      copy = copy.songQueu.concat(action.songs);
      return copy2;
     case REMOVE_SONG_FROM_QUEU:
      let copy3 = merge({}, oldState);
      copy.songQueu.shift();
      return copy3;
  }
};

export default QueuReducer;
