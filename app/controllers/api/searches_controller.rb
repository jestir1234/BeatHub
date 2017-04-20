class Api::SearchesController < ApplicationController

  def search
    query_string = params[:query]

    @search_results = {}


    @search_results[:artists] = Artist.whose_name_starts_with(query_string)
    @search_results[:albums] = Album.whose_name_starts_with(query_string)
    @search_results[:songs] = Song.whose_name_starts_with(query_string)

    render "api/searches/show"
  end
end
