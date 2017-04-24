class PlaylistSong < ActiveRecord::Base
  validates :song, :playlist, presence: true

  belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: "Song"

  belongs_to :playlist,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: "Playlist"

end
