class AddImageBannerToArtistAgain < ActiveRecord::Migration
  def change
    add_column :artists, :banner_url, :string
  end
end
