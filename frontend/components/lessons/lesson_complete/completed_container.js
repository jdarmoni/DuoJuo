import { connect } from 'react-redux';
import Completed from './completed'

const mapStateToProps = (state) => {
    let todayProgress = state.entities.users[4].calendar[0].improvement
    return {
        progress: todayProgress
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed)