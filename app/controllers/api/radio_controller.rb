class Api::RadioController < ApplicationController

  def index
    songs = Song.all

    collection = [];

    10.times do
      collection.push(songs[rand(0...songs.length)])
    end

    @songs = collection
    render 'api/songs/radio'
  end

  def show
    artist = Artist.includes(:songs).find(params[:id])
    artist_songs = artist.songs;

    @song = artist_songs[rand(0..artist_songs.length)]
    render 'api/songs/show'
  end
end
