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

    


    def update
    end

    private

    def lang_params
        # removed require PROBABLY bc you've been doing it on the window, not through actions, and doont have lang key  
        # Ed: 8/1/19: it's because you don't provide a data object in the api for fetch languages, which is likely how you were testing.
        params.permit(:streak, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level, :user_id)
    end
end
