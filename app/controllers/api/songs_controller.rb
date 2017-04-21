class Api::SongsController < ApplicationController

  def index

    album_id = params[:album_id].to_i
    album = Album.includes(:songs).find(album_id)
    @album = album
    render 'api/songs/show'
  end
end
