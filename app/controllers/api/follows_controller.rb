class Api::FollowsController < ApplicationController


  def index
  end

  def create
    follower_id = params[:follow][:follower_id]
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
    follower_id = params[:follow][:follower_id]
    followable_id = params[:follow][:followable_id]
    followable_type = params[:follow][:followable_type]

    @follow = Follow.where(follower_id: follower_id, followable_id: followable_id)

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

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followable_id, :followable_type)
  end

end
