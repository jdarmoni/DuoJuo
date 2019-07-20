import { connect } from 'react-redux';
import Completed from './completed'

const mapStateToProps = (state) => {
    
    let todayProgress = Object.values(state.entities.users)[0].calendar
    let user = state.entities.users[state.session.id]
    let site_streak = user.site_streak
    if (todayProgress.length > 0) {
        
        todayProgress = todayProgress[todayProgress.length - 1].improvement
    } else {
        
        todayProgress = 10
    }

    return {
        progress: todayProgress,
        site_streak: site_streak
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed)