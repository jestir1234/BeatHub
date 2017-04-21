export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";


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
