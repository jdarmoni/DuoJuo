import { connect } from 'react-redux';
import Completed from './completed'

const mapStateToProps = (state) => {
    debugger
    let todayProgress = Object.values(state.entities.users)[0].calendar[0].improvement
    return {
        progress: todayProgress
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed)