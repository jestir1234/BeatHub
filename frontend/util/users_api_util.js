export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: "api/users"
  });
};


export const fetchFollowedUsers = () => {
  return $.ajax({
    method: "GET",
    url: "api/follows"
  });
};

export const fetchUpdatedUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};
