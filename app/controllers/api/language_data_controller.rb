class Api::LanguageDataController < ApplicationController
    
    def create
        @newLanguage = LanguageData.new(lang_data_params)

        if @newLanguage.save
            render :show
        end
    end

    def lang_data_params
        params.permit(:streak, :user_id, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level)
    end

end