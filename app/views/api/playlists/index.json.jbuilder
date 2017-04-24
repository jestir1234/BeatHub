json.array!(@playlists) do |playlist|
  json.id playlist.id
  json.name playlist.name
  json.description playlist.description
  json.image_url playlist.image_url
  json.author playlist.author.username
  json.songs do
    json.array!(playlist.playlist_songs) do |playlist_song|
      json.song playlist_song.song
      json.partial! "api/songs/songs", song: playlist_song.song
      json.playlist_ord playlist_song.ord
      json.playlist_song_id playlist_song.id
    end
  end
end
