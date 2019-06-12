import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { signup } from '../../actions/session_actions'

const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    signup: (user)=>dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
