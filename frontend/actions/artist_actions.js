import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";

export const receiveArtistAlbums = (artistAlbums) => {
  return {
    type: RECEIVE_ARTIST_ALBUMS,
    artistAlbums
  };
};

export const fetchArtistAlbums = (artistId) => {
  return (dispatch) => {
    return ArtistAPIUtil.fetchArtistAlbums(artistId).then((artistAlbums) => dispatch(receiveArtistAlbums(artistAlbums)));
  };
};
