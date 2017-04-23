class AddDescriptionToPlaylist < ActiveRecord::Migration
  def change
    add_column :playlists, :description, :text
  end
end
