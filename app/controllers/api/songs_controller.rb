class Api::SongsController < ApplicationController

  def index
    album_id = params[:album_id].to_i
    album = Album.includes(:songs).find(album_id)
    @album = album
    render 'api/songs/index'
  end

  def show
    song_id = params[:id]
    @song = Song.find(song_id)

    render 'api/songs/show'
  end


end
