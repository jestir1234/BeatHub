export const fetchRandomAlbums = () => {
  return $.ajax({
    method: "GET",
    url: 'api/albums'
  });
};
