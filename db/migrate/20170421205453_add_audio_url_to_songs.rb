class AddAudioUrlToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :audio_url, :string
  end
end
