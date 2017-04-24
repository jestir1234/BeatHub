class Song < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  pg_search_scope :whose_name_starts_with, against: :name, using: {tsearch: {prefix: true} }

  validates :name, :album, :album_ord, :genre, presence: true

  belongs_to :album
  belongs_to :artist

  has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: "PlaylistSong"

  has_many :playlists,
    through: :playlist_songs,
    source: :playlist

end
