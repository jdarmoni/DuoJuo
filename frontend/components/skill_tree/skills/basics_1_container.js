import { connect } from 'react-redux';
import Basics1 from './basics_1';

const mapStateToProps = (state) => {
    debugger
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        languages: state.entities.languages,
        basics_1: Object.values(state.entities.users)[0].language_data.fr.skills[0]

    };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basics1);
