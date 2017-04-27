json.array!(@songs) do |song|
  json.partial! 'api/songs/songs', song: song
end
