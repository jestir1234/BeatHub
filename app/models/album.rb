class Album < ActiveRecord::Base
  validates :name, :artist, :year, presence: true;

  belongs_to :artist
  has_many :songs
end
