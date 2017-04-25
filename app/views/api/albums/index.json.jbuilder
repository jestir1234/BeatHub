json.array!(@collection) do |album|
  json.name album.name
  json.artist_name album.artist_name
  json.image_url album.image_url
  json.id album.id
end
