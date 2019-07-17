import { connect } from 'react-redux';
import Completed from './completed'

const mapStateToProps = (state) => {
    
    let todayProgress = Object.values(state.entities.users)[0].calendar
    if (todayProgress.length > 0) {
        
        todayProgress = todayProgress[0].improvement
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