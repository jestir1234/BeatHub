import * as PlaylistSongAPIUtil from '../util/playlist_songs_api_util';

export const REMOVE_SONG_FROM_PLAYLIST = "REMOVE_SONG_FROM_PLAYLIST";
export const ADD_SONG_TO_PLAYLIST = "ADD_SONG_TO_PLAYLIST";


export const addSongToPlaylist = (playlistSong) => {
  return {
    type: ADD_SONG_TO_PLAYLIST,
    playlistSong
  };
};

export const removeSongFromPlaylist = (playlistSongId) => {
  return {
    type: REMOVE_SONG_FROM_PLAYLIST,
    playlistSongId
  };
};

export const createSongToPlaylist = (playlistSong) => {
  return (dispatch) => {
    return PlaylistSongAPIUtil.createPlaylistSong(playlistSong).then((playlistSong) => addSongToPlaylist(playlistSong));
  };
};

export const deleteSongFromPlaylist = (playlistSongId) => {
  return (dispatch) => {
    return PlaylistSongAPIUtil.deletePlaylistSong.then(() => dispatch(removeSongFromPlaylist(playlistSongId)));
  };
};
