class Api::LanguagesController < ApplicationController
    
    def index
    end

    def create
        debugger
        @newLanguage = Language.new(language_params)
        if @newLanguage.save
            render :show
        end
    end

    def show
    end

    def update
    end
    
    def language_params

        params.require(:languages).permit(:streak)
    end
end
