class Api::UserController < ApplicationController
  def show
    # doesn't do anything
    @user = User.find_by(id: params[:id])
    render :show
  end
  
  def create
    
    @user = User.new(user_params)
    
    @language_data = {}
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
      render "api/user/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    
    @user = User.find(params[:id])
  
    if @user.update(user_params)
        render :show
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :rupees, :active, :password, :email, :language_strength, :site_streak, :learning_language, :learning_language_string, :rupees)
  end
end
