class UsersController < ApplicationController

  before_action :authenticate_user!

  def current_logged_in_user
    @user = current_user
    render status: 200, json: @user
  end

  # def update
  #   @user = current_user
  #
  #   if params[:avatar]
  #     @user.avatar.attach(params[:avatar])
  #     render status: 200, :json => {message: "Upload image succeed"}
  #   else
  #     if @user.update(user_params)
  #       render status: 200, json: {message: "Edit nickname succeed"}
  #     end
  #   end
  # end

  private
    # def user_params
    #   params.permit( :avatar, :nickname)
    # end
end
