json.array!(@playlists) do |playlist|
  json.id playlist.id
  json.name playlist.name
  json.description playlist.description
  json.image_url playlist.image_url
  json.author playlist.author.username
  json.songs do
    json.array!(playlist.songs) do |song|
      json.partial! "api/songs/songs", song: song
    end
  end
end
