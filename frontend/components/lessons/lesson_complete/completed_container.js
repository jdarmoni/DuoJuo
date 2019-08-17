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
    const latest = Math.max(...calendars.map(o => o.datetime), 0);
    let twentyFourHrs = 86450000;


    for (let i = 0; i < calendars.length; i++) {
        let week = 86400000 * 7;
        
        let dateNum;
        // only define dateNum if it's within a week's range!
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
            // if dif between today & latest cal is more than 24 hours, set streak to 0, break. Save ourself some work!
            if (today - latest > twentyFourHrs) {

                site_streak = 0;
                break;

            } else if (today - calendars[i].datetime < twentyFourHrs) {

                site_streak = 1;
            }
            
            continue;
        }
        // Step 2: We'll compare calendars for currentDay [i] and the day before [i -1]

            let currentDay = calendars[i].datetime;
            let dayBefore = calendars[i - 1].datetime;
            let CD = new Date(currentDay);
            let DB = new Date(dayBefore);

            // two conditions: 
            // 1: Calendar[i] and calendar[i -1] are within same week!
            // 2: Differences in their day is not greater than 1
            if ((today - currentDay < week) && (CD.getDay() - DB.getDay() <= 1)) {

                if (site_streak === 0) {
                    // if you START a site_streak, account for today and yesterday
                    site_streak += 2
                } else {
                    site_streak += 1
                }
            } else {
                site_streak = 0
            }
        }
    

        if (site_streak === 0) {
            // at the end, you could have a zero site_streak but still have one more calendar to check. If that cal's been created within 24 hours, site_streak = 1
            if (today - latest < twentyFourHrs) {

                site_streak = 1
            }
        }
        // if (i === 0) {
        //     site_streak = 1;
        //     continue;
        // }
        // let currentDay = calendars[i].datetime;
        // let dayBefore = calendars[i - 1].datetime;
        // let CD = new Date(currentDay);
        
        // let DB = new Date(dayBefore);
        // debugger
        // if (CD.getDay() - DB.getDay() <= 1) {
        //     debugger
        //     if (site_streak === 0) {
        //         site_streak += 2
        //     } else {
        //         site_streak += 1
        //     }
        // } else {
        //     site_streak = 0
        // }
    

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