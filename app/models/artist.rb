class Artist < ActiveRecord::Base
  validates :name, :genre, presence: true
  validates :name, uniqueness: true;

  has_many :albums

  has_many :songs,
  through: :albums


end
