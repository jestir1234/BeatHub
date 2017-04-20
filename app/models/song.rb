class Song < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  pg_search_scope :whose_name_starts_with, against: :name, using: {tsearch: {prefix: true} }

  validates :name, :album, :album_ord, :genre, presence: true

  belongs_to :album
  belongs_to :artist

end
