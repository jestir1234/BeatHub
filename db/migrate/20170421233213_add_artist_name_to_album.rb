class AddArtistNameToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :artist_name, :string
  end
end
