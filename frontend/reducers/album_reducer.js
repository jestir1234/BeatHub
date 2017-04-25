import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST_ALBUMS } from '../actions/artist_actions';

const _nullAlbum = null;

const AlbumReducer = (oldState = null, action) => {

  switch(action.type){
    case RECEIVE_ALBUM:
      return action.album;
    case RECEIVE_ARTIST_ALBUMS:
      return action.artistAlbums;
    default:
    return oldState;
  }
};

export default AlbumReducer;
