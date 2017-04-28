class Api::AlbumsController < ApplicationController

  def index

    if params[:artist_id]
      artist = Artist.includes(:albums).find(params[:artist_id])
      @collection = artist.albums
    else

      @albums = Album.all
      @collection = []

      5.times do
        @collection.push(@albums[rand(0..@albums.count - 1)])
      end

    end
      render 'api/albums/index'
  end
end
