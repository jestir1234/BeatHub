json.set! :genres do
  @genres.keys.each do |genre|
    json.set! genre, @genres[genre].each do |song|
      json.partial! "api/songs/songs", song: song
    end
  end
end
