class Album < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  pg_search_scope :whose_name_starts_with, against: :name, using: {tsearch: {prefix: true} }

  validates :name, :artist, :year, presence: true;

  belongs_to :artist
  has_many :songs
end
