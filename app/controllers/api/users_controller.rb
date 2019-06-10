class Api::UsersController < ApplicationController
  def create
    debugger
    @user = User.new(user_params)
    # debugger
    # @language_data = {user_params[:learning_language]: user_params[:learning_language]}
    # @language = Language.new({
    #   learning_language: user_params[:learning_language],
    #   language_string: @user[:learning_language_string],
    #   points: 0,
    #   learning: true,
    #   language: @user[:learning_language],
    #   level: 0,
    #   sentences_translated: 0,
    #   to_next_level: 10
    # })
    # debugger
    @languages = [{
      # "streak": 0,
      "language_string": @user[:learning_language_string],
      # "points": 0,
      # "learning": true,
      "language": @user[:learning_language]
      # "level": 0,
      # "current_learning": true,
      # "sentences_translated": 0,
      # "to_next_level": 10
    }]
    
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :rupees, :active, :password, :email, :language_strength, :site_streak, :learning_language, :learning_language_string, :rupees)
  end
end
