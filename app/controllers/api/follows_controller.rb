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
    @follow = Follow.find(params[:id])

    if @follow.destroy
      render 'api/follows/show'
    else
      render json: @follow.errors.full_messages
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followable_id, :followable_type)
  end

end
