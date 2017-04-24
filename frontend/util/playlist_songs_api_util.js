export const createPlaylistSong = (playlistSong) => {
  return $.ajax({
    method: "POST",
    url: "api/playlist_songs",
    data: { playlistSong }
  });
};

export const deletePlaylistSong = (playlistSong) => {

  return $.ajax({
    method: 'DELETE',
    url: `api/playlist_songs/${playlistSong.id}`,
    data: { playlistSong }
  });
};
