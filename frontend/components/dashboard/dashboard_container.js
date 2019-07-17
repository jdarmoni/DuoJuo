import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {logout} from '../../actions/session_actions'
import { fetchLanguageDatas, fetchLanguageData} from '../../actions/language_data_actions'
import { updateUser } from '../../actions/user_actions';
import {createCalendars} from '../../actions/calendar_actions'
const mapStateToProps = (state) => {
    
    let site_streak = "//d35aaqx5ub95lt.cloudfront.net/images/icons/streak-empty.svg";
    if (state.entities.users[state.session.id].site_streak > 0) {
        site_streak = "//d35aaqx5ub95lt.cloudfront.net/images/icons/streak.svg"
    }
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        languageData: Object.values(state.entities.language_data),
        site_streak: site_streak
    };
};
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchLanguageDatas: (user) => dispatch(fetchLanguageDatas(user)),
    fetchLanguageData: (lang_data) => dispatch(fetchLanguageData(lang_data)),
    updateUser: (user) => dispatch(updateUser(user)),
    createCalendars: (calendar)=> dispatch(createCalendars(calendar))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
