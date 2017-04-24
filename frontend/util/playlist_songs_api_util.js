export const createPlaylistSong = (playlistSong) => {
  return $.ajax({
    method: "POST",
    url: "api/playlist_songs",
    data: { playlistSong }
  });
};
