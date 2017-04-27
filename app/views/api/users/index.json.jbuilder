json.array!(@users) do |user|
  json.id user.id
  json.username user.username
  json.followed current_user.followed_users.include?(user)
  json.playlists user.playlists
  json.followed_artists user.followed_artists
  json.default_image_url user.default_image_url
  json.followed_playlists user.followed_playlists
end
