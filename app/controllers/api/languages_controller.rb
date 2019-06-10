class Api::LanguagesController < ApplicationController
    
    def index
    end

    def create
        debugger
        @newLanguage = Language.new(lang_params)
        if @newLanguage.save
            render :show
        end
    end

    def show
    end

    def update
    end

    private

    def lang_params
        params.permit(:streak, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level)
    end
end


# <ActionController::Parameters {"user"=>{"username"=>"ki1Qp7l2", "email"=>"ki1Qp7l2@gmail.com", "password"=>"starwars", "learning_language_string"=>"French", "learning_language"=>"fr", "active"=>"false"}, "format"=>:json, "controller"=>"api/users", "action"=>"create"} permitted: false>
# (byebug) params["user"]
# <ActionController::Parameters {"username"=>"ki1Qp7l2", "email"=>"ki1Qp7l2@gmail.com", "password"=>"starwars", "learning_language_string"=>"French", "learning_language"=>"fr", "active"=>"false"} permitted: false>
# (byebug) c
