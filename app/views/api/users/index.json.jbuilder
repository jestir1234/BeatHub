json.array!(@users) do |user|
  json.id user.id
  json.username user.username
  json.followed user.followed_users.include?(current_user)
end
