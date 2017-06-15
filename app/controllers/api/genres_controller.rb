class Api::GenresController < ApplicationController

  def index
    synth_pop_songs = Song.where(genre: "Synth-pop")
    dream_pop_songs = Song.where(genre: "Dream-pop")
    shoe_gaze_songs = Song.where(genre: "Shoe-gaze")
    soul_songs = Song.where(genre: "soul")
    indie_rock_songs = Song.where(genre: "Indie-rock")
    j_rock_songs = Song.where(genre: "J-Rock")
    punk_rock_songs = Song.where(genre: "Punk-Rock")

    @genres = {
      synth_pop: synth_pop_songs,
      dream_pop: dream_pop_songs,
      shoe_gaze: shoe_gaze_songs,
      soul: soul_songs,
      indie_rock: indie_rock_songs,
      j_rock: j_rock_songs,
      punk_rock: punk_rock_songs,
    }

    render 'api/genres/index'
  end

  def category
  end
end
