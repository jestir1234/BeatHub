class AddImageToPlaylists < ActiveRecord::Migration
  def change
    add_column :playlists, :image_url, :string
  end
end
