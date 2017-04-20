class Song < ActiveRecord::Base
  validates :name, :album, :album_ord, :genre, presence: true

  belongs_to :album
  belongs_to :artist

end
