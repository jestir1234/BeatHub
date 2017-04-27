# json.extract! @playlist, :id, :author, :name, :image_url

json.id @playlist.id
json.name @playlist.name
json.image_url @playlist.image_url
json.author @playlist.author.username
json.description @playlist.description
json.followed current_user.followed_playlists.include?(@playlist)
json.author_id @playlist.author.id
json.songs do
  json.array!(@playlist.songs) do |song|
    json.partial! "api/songs/songs", song: song
  end
end
