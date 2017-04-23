class Api::PlaylistsController < ApplicationController

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.author = current_user

    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    user = User.includes(:playlists).find(params[:user_id])
    @playlists = user.playlists
    render 'api/playlists/index'
  end

  def destroy
  end

  def update

  end

  def show

  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :description)
  end
end
