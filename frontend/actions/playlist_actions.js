export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLISTS = "REMOVE_PLAYLISTS";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const EDIT_PLAYLIST = "EDIT_PLAYLIST";

import * as PlaylistAPIUtil from '../util/playlist_api_util';


export const receivePlaylists = (playlists) => {
  return{
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const receievePlaylist = (playlist) => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const removePlaylists = () => {
  return {
    type: REMOVE_PLAYLISTS
  };
};

export const removePlaylist = (playlistId) => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId
  };
};

export const editPlaylist = (playlist) => {
  return {
    type: EDIT_PLAYLIST,
    playlist
  };
};

export const createPlaylist = (playlist) => {
  return (dispatch) => {
    return PlaylistAPIUtil.createPlaylist(playlist).then((playlist) => dispatch(receievePlaylist(playlist)));
  };
};


export const fetchPlaylists = (userId) => {
  return (dispatch) => {
    return PlaylistAPIUtil.fetchPlaylists(userId).then((playlists) => dispatch(receivePlaylists(playlists)));
  };
};


export const fetchPlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistAPIUtil.fetchPlaylist(playlistId).then((playlist) => dispatch(receievePlaylist(playlist)));
  };
};

export const deletePlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistAPIUtil.deletePlaylist(playlistId).then(() => dispatch(removePlaylist(playlistId)));
  };
};

export const updatePlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistAPIUtil.updatePlaylist(playlistId).then((playlist) => dispatch(editPlaylist(playlist)));
  };
};
