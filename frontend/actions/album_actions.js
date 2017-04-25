export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_FEATURED_ALBUMS = "RECEIVE_FEATURED_ALBUMS";
import * as AlbumAPIUtil from '../util/album_api_util';

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const removeAlbum = (album) => {
  return {
    type: REMOVE_ALBUM,
    album
  };
};

export const receiveFeaturedAlbums = (albums) => {
  return {
    type: RECEIVE_FEATURED_ALBUMS,
    albums
  };
};


export const fetchRandomAlbums = () => {
  return (dispatch) => {
    return AlbumAPIUtil.fetchRandomAlbums().then((albums) => dispatch(receiveFeaturedAlbums(albums)));
  };
};
