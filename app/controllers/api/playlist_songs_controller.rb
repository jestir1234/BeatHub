class Api::PlaylistSongsController < ApplicationController

  def create

    @playlist_song = PlaylistSong.new(playlist_song_params)
    playlist = Playlist.find(params[:playlistSong][:playlist_id])
    song = Song.find(params[:playlistSong][:song_id])

    @playlist_song.ord = playlist.songs.length + 1

    if @playlist_song.save

      playlist = @playlist_song.playlist
      sorted_playlist = playlist.playlist_songs.sort_by { |playlist_song| playlist_song.ord }

      sorted_playlist.each_with_index do |playlist_song, idx|
        playlist_song.ord = idx + 1
        playlist_song.save
        print playlist_song.ord
      end
      
      render 'api/playlist_songs/show'
    else
      render json: @playlist_songs.errors.full_messages
    end

  end

  def destroy

    @playlist_song = PlaylistSong.includes(:playlist).find_by(id: params[:playlistSong][:id], ord: params[:playlistSong][:playlist_ord]);
    if @playlist_song.destroy

      playlist = @playlist_song.playlist
      sorted_playlist = playlist.playlist_songs.sort_by { |playlist_song| playlist_song.ord }

      sorted_playlist.each_with_index do |playlist_song, idx|
        playlist_song.ord = idx + 1
        playlist_song.save
      end

      render 'api/playlist_songs/show'
    else
      render json: @playlist_song.errors.full_messages
    end
  end


  private

  def playlist_song_params
    params.require(:playlistSong).permit(:song_id, :playlist_id)
  end
end
