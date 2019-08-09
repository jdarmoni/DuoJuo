import { connect } from 'react-redux';
import Completed from './completed'

const mapStateToProps = (state) => {
    let today = Date.now()
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
    let date = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    let calendars = user.calendar

    for (let i = 0; i < calendars.length; i++) {
        let week = 86400000 * 7;
        debugger
        let dateNum;
        if (today - calendars[i].datetime < week){
            dateNum = new Date(calendars[i].datetime).getDay();
            date[dateNum] = orange;
        }
        let daySpan = document.getElementById(`comp-${dateNum}`);
        
        if (daySpan){
            daySpan.style.color = orange;
        } 
        // STREAK LOGIC
        if (i === 0) {
            site_streak = 1;
            continue;
        }
        // right here is where I need to use week
        let currentDay = calendars[i].datetime;
        let dayBefore = calendars[i - 1].datetime;
        let CD = new Date(currentDay);
        
        let DB = new Date(dayBefore);
        debugger
        if (CD.getDay() - DB.getDay() <= 1) {
            debugger
            if (site_streak === 0) {
                site_streak += 2
            } else {
                site_streak += 1
            }
        } else {
            site_streak = 0
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
        sunday: date[0],
        monday: date[1],
        tuesday: date[2],
        wednesday: date[3],
        thursday: date[4],
        friday: date[5],
        saturday: date[6],
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed)