class Api::LanguageDataController < ApplicationController
    def create
        @newLanguage = LanguageData.new(lang_data_params)
        # @eggs = User.find_by(id: params[:user_id]).language_data

        debugger
        if @newLanguage.save
            render :show
        end
    end

    def lang_data_params
        params.permit(:streak, :user_id, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level, :level_percent, :max_level, :language_strength, :fluency_score, :first_time)
    end
end