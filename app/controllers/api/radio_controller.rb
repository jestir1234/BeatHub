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
end
