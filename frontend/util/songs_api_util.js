export const fetchAlbumSongs = (albumId) => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${albumId}/songs`
  });
};

export const fetchSong = (songId) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/${songId}`
  });
};

export const fetchPlaylistSongs = (playlistId) => {
  return $.ajax({
    method: "GET",
    url: `api/playlists/${playlistId}`
  });
};
