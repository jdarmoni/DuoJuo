class Api::LanguageDataController < ApplicationController
    def create
        debugger
        @newLanguage = LanguageData.new(lang_data_params)
        debugger
        if @newLanguage.save
            render :show
        end
    end

    def lang_data_params
        params.permit(:user_id)
    end

end