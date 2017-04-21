class AddDurationToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :duration, :integer
  end
end
