class Api::CalendarsController < ApplicationController
    def create
        @calendar = Calendars.new(calendars_params)
        
        if @calendar.save
            render :show
        end
    end

    def update
        @calendar = Calendars.find(params[:id])
        
        if @calendar.update(calendars_params)
            render :show
        end
    end
    
    def calendars_params
        params.require(:calendars).permit(:user_id, :id, :datetime, :improvement)
    end
end