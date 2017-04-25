export const ADD_SONG_TO_QUEU = "ADD_SONG_TO_QUEU";
export const REMOVE_SONG_FROM_QUEU = "REMOVE_SONG_FROM_QUEU";
export const ADD_SONGS_TO_QUEU = "ADD_SONGS_TO_QUEU";

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
