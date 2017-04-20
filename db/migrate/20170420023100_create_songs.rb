class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :name
      t.integer :album_id
      t.integer :album_ord
      t.string :genre

      t.timestamps null: false
    end
  end
end
