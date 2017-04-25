export const fetchArtistAlbums = (artistId) => {
  return $.ajax({
    method: "GET",
    url: `api/artists/${artistId}/albums`
  });
};
