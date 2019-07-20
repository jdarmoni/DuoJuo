import { connect } from 'react-redux';
import Completed from './completed'

const mapStateToProps = (state) => {
    
    let todayProgress = Object.values(state.entities.users)[0].calendar;
    let user = state.entities.users[state.session.id];
    let site_streak = user.site_streak;
    let grey = "#e5e5e5";
    let orange = "#ff9600";
    let monday = grey;
    let tuesday = grey;
    let wednesday = grey;
    let thursday = grey;
    let friday = grey;
    let saturday = grey;
    let sunday = grey;
    let date = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
    let calendars = user.calendar
    for (let i = 0; i < calendars.length; i++) {
        debugger
        let dateNum = new Date(calendars[i].datetime).getDay();
        date[dateNum -1] = orange;
        let daySpan = document.getElementById(`comp-${dateNum}`);
        if (daySpan){
            daySpan.style.color = orange;
        } 
    }

    if (todayProgress.length > 0) {
        
        todayProgress = todayProgress[todayProgress.length - 1].improvement
    } else {
        
        todayProgress = 10
    }
    debugger
    return {
        progress: todayProgress,
        site_streak: site_streak,
        monday: date[0],
        tuesday: date[1],
        wednesday: date[2],
        thursday: date[3],
        friday: date[4],
        saturday: date[5],
        sunday: date[6]
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed)