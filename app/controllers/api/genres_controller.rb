class Api::GenresController < ApplicationController

  def index
    synth_pop = Artist.where(genre: "Synth-pop")
    dream_pop = Artist.where(genre: "Dream-pop")
    shoe_gaze = Artist.where(genre: "Shoe-gaze")
    soul = Artist.where(genre: "soul")
    indie_rock = Artist.where(genre: "Indie-rock")
    j_rock = Artist.where(genre: "J-Rock")
    punk_rock = Artist.where(genre: "Punk-Rock")


    @genres = {
      synth_pop: synth_pop,
      dream_pop: dream_pop,
      shoe_gaze: shoe_gaze,
      soul: soul,
      indie_rock: indie_rock,
      j_rock: j_rock,
      punk_rock: punk_rock
    }

    render 'api/genres/index'
  end

  def category
  end
end
