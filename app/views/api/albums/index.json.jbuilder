json.array!(@collection) do |album|
  json.name album.name
  json.artist_name album.artist_name
  json.image_url album.image_url
  json.id album.id
  json.artist do
    json.id album.artist.id
    json.name album.artist.name
    json.genre album.artist.genre
    json.image_url album.artist.image_url
    json.banner_url album.artist.banner_url
    json.followed current_user.followed_artists.include?(album.artist)
  end
end
