class Album < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  pg_search_scope :whose_name_starts_with, against: :name, using: {tsearch: {prefix: true} }

  validates :name, :artist, :year, presence: true;

  # has_attached_file :image, default_url: "http://cdn2.pitchfork.com/news/51168/21dd905b.jpeg"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :artist
  has_many :songs
end
