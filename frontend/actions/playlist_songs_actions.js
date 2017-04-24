import * as PlaylistSongAPIUtil from '../util/playlist_songs_api_util';
import { removePresentationItem } from './presentation_actions';

export const REMOVE_SONG_FROM_PLAYLIST = "REMOVE_SONG_FROM_PLAYLIST";
export const ADD_SONG_TO_PLAYLIST = "ADD_SONG_TO_PLAYLIST";


export const addSongToPlaylist = (playlistSong) => {
  return {
    type: ADD_SONG_TO_PLAYLIST,
    playlistSong
  };
};

export const removeSongFromPlaylist = (playlistSong) => {
  return {
    type: REMOVE_SONG_FROM_PLAYLIST,
    playlistSong
  };
};

export const createSongToPlaylist = (playlistSong) => {
  return (dispatch) => {
    return PlaylistSongAPIUtil.createPlaylistSong(playlistSong).then((playlistSong) => addSongToPlaylist(playlistSong));
  };
};

export const deleteSongFromPlaylist = (playlistSong) => {
  return (dispatch) => {
    return PlaylistSongAPIUtil.deletePlaylistSong(playlistSong).then(() => dispatch(removePresentationItem(playlistSong)));
  };
};
