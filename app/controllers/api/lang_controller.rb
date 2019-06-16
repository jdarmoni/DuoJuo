class Api::LangController < ApplicationController
    
    def create
        debugger
        @newLanguage = Lang.new(lang_params)

        if @newLanguage.save
            render :show
        end
    end

    def lang_params
        params.permit(:streak, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level)
    end

end