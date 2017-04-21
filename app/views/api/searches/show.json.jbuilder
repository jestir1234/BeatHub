# json.extract! @search_results, :artists, :albums, :songs
#
  json.artists do
    json.array!(@search_results[:artists]) do |artist|
      json.id artist.id
      json.name artist.name
      json.genre artist.genre
      json.image_url asset_path(artist.image.url)
    end
  end

  json.albums do
    json.array!(@search_results[:albums]) do |album|
      json.id album.id
      json.name album.name
      json.year album.year
      json.image_url asset_path(album.image.url)
      json.artist album.artist
      json.artist_id album.artist_id
      json.artist_name album.artist_name
    end
  end

  json.songs do
    json.array!(@search_results[:songs]) do |song|
      json.id song.id
      json.name song.name
      json.album song.album
      json.album_id song.album_id
      json.genre song.genre
      json.artist song.album.artist
      json.album_ord song.album_ord
      json.audio_url asset_path(song.audio_url)
    end
end
