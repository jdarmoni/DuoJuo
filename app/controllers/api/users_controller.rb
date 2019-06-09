class Api::UsersController < ApplicationController
  def create
    
    @user = User.new(user_params)
    @lang = {"language_string": user_params[:learning_language]}
    
    debugger
    @languages = {
      # "streak": 0,
      "language_string": @user[:learning_language_string],
      # "points": 0,
      # "learning": true,
      "language": @user[:learning_language]
      # "level": 0,
      # "current_learning": true,
      # "sentences_translated": 0,
      # "to_next_level": 10
    }
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
