class AddDefaultImageForUser < ActiveRecord::Migration
  def change
    add_column :users, :default_image_url, :string
  end
end
