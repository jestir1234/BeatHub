class Api::FollowsController < ApplicationController


  def index
    @users = current_user.followed_users

    render 'api/users/index'
  end

  def create
    follower_id = current_user.id
    followable_id = params[:follow][:followable_id]
    followable_type = params[:follow][:followable_type]

    @follow = Follow.new(follow_params);

    if @follow.save
      if followable_type == "Artist"
        @artist = Artist.find(followable_id)
        render 'api/artists/show'
      elsif followable_type == "Playlist"
        @playlist = Playlist.find(followable_id)
        render 'api/playlists/show'
      elsif followable_type == "User"
        @user = User.find(followable_id)
        render 'api/users/show'
      end
    else
      render json: @follow.errors.full_messages
    end

  end

  def destroy
    follower_id = current_user.id
    followable_id = params[:follow][:followable_id]
    followable_type = params[:follow][:followable_type]

    @follow = Follow.where(follower_id: follower_id, followable_id: followable_id)

    puts @follow

    @follow = @follow[0];
    if @follow.destroy
      if followable_type == "Artist"
        @artist = Artist.find(followable_id)
        render 'api/artists/show'
      elsif followable_type == "Playlist"
        @playlist = Playlist.find(followable_id)
        render 'api/playlists/show'
      elsif followable_type == "User"
        @user = User.find(followable_id)
        render 'api/users/show'
      end
    else
      render json: @follow.errors.full_messages
    end
  end

  def follows_artist
    followed_artists = current_user.followed_artists
    current_artist_id = params[:id]
    @followed = false
    followed_artists.each do |artist|
      if current_artist_id == artist.id
        @followed = true
      end
    end

    render 'api/follows/follows'
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followable_id, :followable_type)
  end

end
