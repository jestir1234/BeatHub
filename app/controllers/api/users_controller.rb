class Api::UsersController < ApplicationController

  def index
    @users = User.all

    render 'api/users/index'
  end


  def create
    @user = User.new(user_params)
    @user.default_image_url = "https://s3.amazonaws.com/beathub-dev/pics/default_user_image.jpg"
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show

    @user = User.find(params[:id]);

    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  def songs
    user = User.includes(:playlists => :songs).includes(:followed_playlists => :songs).find(params[:id])
    @songs = user.followed_playlist_songs + user.playlist_songs
    render 'api/users/songs'
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
