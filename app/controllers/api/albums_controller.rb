class Api::AlbumsController < ApplicationController

  def index

    @albums = Album.all
    @collection = []
    5.times do
      @collection.push(@albums[rand(0..@albums.count - 1)])
    end
    
    render 'api/albums/index'
  end
end
