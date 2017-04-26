json.array!(@users) do |user|
  json.id user.id
  json.username user.username
  json.followed current_user.followed_users.include?(user)
end
