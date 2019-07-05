import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {logout} from '../../actions/session_actions'
import { fetchLanguageDatas, fetchLanguageData} from '../../actions/language_data_actions'
import { updateUser } from '../../actions/user_actions';

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
    fetchLanguageDatas: (user) => dispatch(fetchLanguageDatas(user)),
    fetchLanguageData: (lang_data) => dispatch(fetchLanguageData(lang_data)),
    updateUser: (user) => dispatch(updateUser(user)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
