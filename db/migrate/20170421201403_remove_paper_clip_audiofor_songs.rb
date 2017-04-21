class RemovePaperClipAudioforSongs < ActiveRecord::Migration
  def change
    remove_attachment :songs, :audio
  end
end
