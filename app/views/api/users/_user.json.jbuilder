# json.extract! user, :id, :username

json.id user.id
json.username user.username
json.playlists user.playlists
json.followed_artists user.followed_artists
json.followed_playlists user.followed_playlists
json.default_image_url user.default_image_url
json.followed current_user.followed_users.include?(user)
