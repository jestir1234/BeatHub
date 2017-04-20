
export const searchMusic = (query) => {
  return $.ajax({
    method: "GET",
    url: `api/search?query=${query}`,
  });
};
