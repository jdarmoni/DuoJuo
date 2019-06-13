class Api::LanguagesController < ApplicationController
    
    def index
    end

    def create
        
        @newLanguage = Language.new(lang_params)
        if @newLanguage.save
            render :show
        end
    end

    def show
    end

    # Language.new({ language: "fr", language_string: "French", learning: true, level: 0, points: 0, sentences_translated: 0, streak: 0, to_next_level: 10})
    


    def update
    end

    private

    def lang_params
        # removed require PROBABLY bc you've been doing it on the window, not through actions, and doont have lang key  
        params.permit(:streak, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level, :user_id)
    end
end


# <ActionController::Parameters {"user"=>{"username"=>"ki1Qp7l2", "email"=>"ki1Qp7l2@gmail.com", "password"=>"starwars", "learning_language_string"=>"French", "learning_language"=>"fr", "active"=>"false"}, "format"=>:json, "controller"=>"api/users", "action"=>"create"} permitted: false>
# (byebug) params["user"]
# <ActionController::Parameters {"username"=>"ki1Qp7l2", "email"=>"ki1Qp7l2@gmail.com", "password"=>"starwars", "learning_language_string"=>"French", "learning_language"=>"fr", "active"=>"false"} permitted: false>
# (byebug) c
