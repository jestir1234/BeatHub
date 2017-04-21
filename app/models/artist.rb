class Artist < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  pg_search_scope :whose_name_starts_with, against: :name, using: {tsearch: {prefix: true} }

  validates :name, :genre, presence: true
  validates :name, uniqueness: true;

  has_attached_file :image, default_url: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png&w=350&h=254"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  has_many :albums

  has_many :songs,
  through: :albums

  def image_url
    self.image.url
  end


end
