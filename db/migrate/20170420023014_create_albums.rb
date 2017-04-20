class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.integer :artist_id
      t.date :year

      t.timestamps null: false
    end
  end
end
