class Api::FollowsController < ApplicationController


  def index
  end

  def create
    debugger
    @follow = Follow.new(follow_params);

    if @follow.save
      render 'api/follows/show'
    else
      render json: @follow.errors.full_messages
    end

  end

  def destroy
    follower_id = params[:follow][:follower_id]
    followable_id = params[:follow][:followable_id]
    follower_type = params[:follow][:follower_type]

    @follow = Follow.where(follower_id: follower_id, followable_id: followable_id)

    @follow = @follow.length > 1 ? @follow[0] : @follow
    debugger

    if @follow.destroy
      if follower_type == "Artist"
        @artist = Artist.find(followable_id)
        render 'api/artists/show'
      elsif follower_type == "Playlist"
        @playlist = Playlist.find(followable_id)
        render 'api/playlists/show'
      elsif follower_type == "User"
        # will render users show
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
