json.array!(@playlist.songs) do |song|
  playlist_song = PlaylistSong.find_by(song_id: song.id)
  json.partial! "api/songs/songs", song: song
  json.playlist_ord playlist_song.ord
  json.playlist_song_id playlist_song.id
end
