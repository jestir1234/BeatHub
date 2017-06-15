# genres = @genres
# json.genres do
#   @genres.keys.each do |genre|
#     songs = genres[genre]
#     json.set! genre, songs.each do |song|
#       json.partial! "api/songs/songs", song: song
#     end
#   end
# end
json.genres @genres
