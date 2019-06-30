import { connect } from 'react-redux';
import Basics2 from './basics_2';

const mapStateToProps = (state) => {
    debugger
    let skills = state.entities.users[52].language_data[state.entities.users[52].learning_language].skills
    let currentSkill;
    skills.forEach(skill => {
        if (skill.url_title === "Basics-2") {
            currentSkill = skill
        }
    });
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        languages: state.entities.languages,
        skill: currentSkill
    };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basics2);
