import { PLAY_CURRENT_SONG, STOP_CURRENT_SONG, PAUSE_CURRENT_SONG, UPDATE_POSITION_AND_DURATION } from '../actions/current_song_actions';
import merge from 'lodash/merge';


const nullStatus = {status: null, positionAndDuration: null};


const CurrentSongStatusReducer = (oldState = nullStatus, action) => {
  switch(action.type){
    case PLAY_CURRENT_SONG:
      let play = action.status;
      let copy = merge({}, oldState, {status: play});
      return copy;
    case PAUSE_CURRENT_SONG:
      let pause = action.status;
      let copy2 = merge({}, oldState, {status: pause});
      return copy2;
    case STOP_CURRENT_SONG:
      let stop = action.status;
      let copy3 = merge({}, oldState, {status: stop});
      return copy3;
    case UPDATE_POSITION_AND_DURATION:
      // let newDuration = action.positionAndDuration;
      let copy4 = merge({}, oldState, {positionAndDuration: action.positionAndDuration});
      return copy4;
    default:
      return oldState;
  }
};

export default CurrentSongStatusReducer;
