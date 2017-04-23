json.array!(@playlists) do |playlist|
  json.id playlist.id
  json.name playlist.name
  json.description playlist.description
end
