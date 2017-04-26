json.id @artist.id
json.name @artist.name
json.genre @artist.genre
json.image_url @artist.image_url
json.banner_url @artist.banner_url
json.followed current_user.followed_artists.include?(@artist)
