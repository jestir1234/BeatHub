class RemovePaperclipcolumns < ActiveRecord::Migration
  def change
    remove_column :artists, :image_file_name
    remove_column :artists, :image_content_type
    remove_column :artists, :image_file_size
    remove_column :artists, :image_updated_at
    remove_column :albums, :image_file_name
    remove_column :albums, :image_content_type
    remove_column :albums, :image_file_size
    remove_column :albums, :image_updated_at
    remove_column :users, :image_url
  end
end
