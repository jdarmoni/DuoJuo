class Api::CalendarsController < ApplicationController
    def create
        @calendar = Calendars.new(calendars_params)
        debugger
        if @calendar.save
            render :show
        end
    end
    
    def calendars_params
        params.require(:calendars).permit(:user_id, :datetime, :improvement)
    end
end