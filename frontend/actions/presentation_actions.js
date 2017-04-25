export const RECEIVE_PRESENTATION_ITEM = "RECEIVE_PRESENTATION_ITEM";
export const REMOVE_PRESENTATION_ITEM = "REMOVE_PRESENTATION_ITEM";
export const ADD_TO_PRESENTATION_ITEM = "ADD_TO_PRESENTATION_ITEM";
import * as PlaylistSongAPIUtil from '../util/playlist_songs_api_util';

export const receivePresentationItem = (presentationItem, presentationType) => {
  return {
    type: RECEIVE_PRESENTATION_ITEM,
    presentationItem: presentationItem,
    presentationType: presentationType
  };
};

export const removePresentationItem = (presentationItem) => {
  return {
    type: REMOVE_PRESENTATION_ITEM,
    presentationItem
  };
};
