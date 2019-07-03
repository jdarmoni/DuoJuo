import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {logout} from '../../actions/session_actions'
import { fetchLanguageDatas} from '../../actions/language_data_actions'
const mapStateToProps = (state) => {
    
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        languageData: Object.values(state.entities.language_data)
    };
};
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchLanguageDatas: (user) => dispatch(fetchLanguageDatas(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
