class Api::PlaylistSongsController < ApplicationController

  def create
    debugger
    @playlist_song = PlaylistSong.new(playlist_song_params)
    playlist = Playlist.find(params[:playlist_id])
    song = Song.find(params[:song_id])

    @playlist_song.playlist = playlist
    @playlist_song.song = song

    @playlist_song.ord = playlist.songs.length + 1

    if @playlist_song.save
      render 'api/playlist_songs/show'
    else
      render json: @playlist_songs.errors.full_messages
    end

  end


  private

  def playlist_song_params
    params.require(:playlist_song).permit(:song_id, :playlist_id)
  end
end
