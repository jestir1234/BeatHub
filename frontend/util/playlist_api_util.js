export const createPlaylist = (playlist) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${playlist.authorId}/playlists`,
    data: { playlist }
  });
};

export const updatePlaylist = (playlist) => {
  return $.ajax({
    method: "PATCH",
    url: `api/playlists/${playlist.id}`,
    data: {playlist}
  });
};

export const deletePlaylist = (playlistId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/playlists/${playlistId}`
  });
};

export const fetchPlaylist = (playlistId) => {
  return $.ajax({
    method: "GET",
    url: `api/playlists/${playlistId}`
  });
};

export const fetchPlaylists = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/playlists`
  });
};
