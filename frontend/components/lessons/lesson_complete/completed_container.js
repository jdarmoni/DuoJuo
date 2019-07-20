import { connect } from 'react-redux';
import Completed from './completed'

const mapStateToProps = (state) => {
    
    let todayProgress = Object.values(state.entities.users)[0].calendar
    debugger
    if (todayProgress.length > 0) {
        
        todayProgress = todayProgress[todayProgress.length - 1].improvement
    } else {
        
        todayProgress = 10
    }

    return {
        progress: todayProgress
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed)