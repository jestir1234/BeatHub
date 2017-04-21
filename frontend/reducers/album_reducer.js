import { RECEIVE_ALBUM } from '../actions/album_actions';

const _nullAlbum = null;

const AlbumReducer = (oldState = null, action) => {
  switch(action.type){
    case RECEIVE_ALBUM:
      return action.album;
    default:
    return _nullAlbum;
  }
};

export default AlbumReducer;
