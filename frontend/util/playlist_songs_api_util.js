export const createPlaylistSong = (playlistSong) => {
  return $.ajax({
    method: "POST",
    url: "api/playlist_songs",
    data: { playlistSong }
  });
};

export const deletePlaylistSong = (playlistSongId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlist_songs/playlistSongId`
  });
};
