class Api::LanguageDataController < ApplicationController

    def index 
        
        @language_datas = User.find(params[:userId]).language_data
        
        render :index
    end

    def show
        @newLanguage = LanguageData.find(params[:id])
        
        if @newLanguage
            render :show
        end
    end

    def create
        
        @newLanguage = LanguageData.new(lang_data_params)

        if @newLanguage.save
            render :show
        end
    end

    def update
        @newLanguage = LanguageData.find(params[:id])
        
        if @newLanguage.update(lang_data_params)
            
            render :show
        end
    end

    def lang_data_params
        params.require(:language_data).permit(:streak, :user_id, :language_string, :id, :points, :learning, :language, :level, :sentences_translated, :to_next_level, :level_percent, :max_level, :language_strength, :fluency_score, :first_time)
    end
end