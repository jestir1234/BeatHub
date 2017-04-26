class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :follower_id
      t.references :followable, polymorphic: true
      t.timestamps null: false
    end
  end
end
