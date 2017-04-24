class AddOrdToPlaylistSongs < ActiveRecord::Migration
  def change
    add_column :playlist_songs, :ord, :integer
  end
end
