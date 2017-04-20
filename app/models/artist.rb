class Artist < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  pg_search_scope :whose_name_starts_with, against: :name, using: {tsearch: {prefix: true} }

  validates :name, :genre, presence: true
  validates :name, uniqueness: true;

  has_many :albums

  has_many :songs,
  through: :albums


end
