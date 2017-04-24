class Playlist < ActiveRecord::Base
  validates :name, :author, presence: true;

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

  has_many :playlist_songs,
    foreign_key: :playlist_id,
    primary_key: :id,
    class_name: "PlaylistSong"

  has_many :songs,
    through: :playlist_songs,
    source: :song

end
