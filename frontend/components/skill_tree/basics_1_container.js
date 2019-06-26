import { connect } from 'react-redux';
import Basics1Skill from './basics_1_skill';

const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        languages: state.entities.languages
    };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basics1Skill);
