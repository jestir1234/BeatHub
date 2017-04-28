export const ADD_SONG_TO_QUEU = "ADD_SONG_TO_QUEU";
export const REMOVE_SONG_FROM_QUEU = "REMOVE_SONG_FROM_QUEU";
export const ADD_SONGS_TO_QUEU = "ADD_SONGS_TO_QUEU";
export const REPLACE_QUEU_SONGS = "REPLACE_QUEU_SONGS";
export const PUSH_SONG_TO_FRONT = "PUSH_SONG_TO_FRONT";

// should add song to the back of the queu

export const addSongToQueu = (song) => {
  return {
    type: ADD_SONG_TO_QUEU,
    song
  };
};

export const addSongsToQueu = (songs) => {
  return {
    type: ADD_SONGS_TO_QUEU,
    songs
  };
};

// should remove first song from queu

export const removeSongFromQueu = (song) => {
  return{
    type: REMOVE_SONG_FROM_QUEU,
    song
  };
};

export const replaceQueuSongs = (songs) => {
  return{
    type: REPLACE_QUEU_SONGS,
    songs
  };
};

export const pushSongToFront = (song) => {
  return {
    type: PUSH_SONG_TO_FRONT,
    song
  };
};
