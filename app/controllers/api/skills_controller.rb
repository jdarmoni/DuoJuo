class Api::SkillsController < ApplicationController 
    def index
        @skill = Skill.all
    end

    def show
        @skill = Skill.find(skill_params[:id])
        render :show
    end

    def create
        @skill = Skill.new(skill_params)
        
        if @skill.save
            render :show    
        end
    end
    
    def update
        @skill = Skill.find(params[:id])
        
        if @skill.update(skill_params)
            
            render :show
        end
    end

    def skill_params 
        params.require(:skill).permit(:language_data_id, :id, :language_string, :url_title, :language_mini, :skill_level, :num_levels, :short, :disabled, :locked)
    end
end