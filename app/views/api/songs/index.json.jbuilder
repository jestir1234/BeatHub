json.array!(@album.songs) do |song|
  json.id song.id
  json.name song.name
  json.album song.album
  json.album_id song.album_id
  json.genre song.genre
  json.artist song.album.artist
  json.album_ord song.album_ord
  json.duration song.duration
end
