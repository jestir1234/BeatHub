import { RECEIVE_PRESENTATION_ITEM, REMOVE_PRESENTATION_ITEM } from '../actions/presentation_actions';
import merge from 'lodash/merge';


const _nullPresentationItem = {item: null, type: null};

const PresentationReducer = (oldState = _nullPresentationItem, action) => {
  switch(action.type) {
    case RECEIVE_PRESENTATION_ITEM:
      return {item: action.presentationItem, type: action.presentationType};
    case REMOVE_PRESENTATION_ITEM:
      let collection = [];
      let removedSong = action.presentationItem;

      oldState.item.songs.forEach((song) => {
        if (song.playlist_song_id === removedSong.id && song.playlist_ord === removedSong.playlist_ord){
          console.log("we skipping this shit");
        } else {
          collection.push(song);
        }
      });

        let copy = merge({}, oldState, {item: {songs: collection}});
        
        return copy;
    default:
      return oldState;
  }
};

export default PresentationReducer;
