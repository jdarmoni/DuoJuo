import { connect } from 'react-redux';
import Basics2 from './basics_2';

const mapStateToProps = (state) => {
    
    let user = Object.values(state.entities.users)[0]
    let skills = user.language_data[user.learning_language].skills
    let currentSkill;

    skills.forEach(skill => {
        let language = skill.language_string;

        if (language === "French") {
            if (skill.url_title === "Greetings") {
                currentSkill = skill
            }
        } else if (language === "Spanish") {
            if (skill.url_title === "Travel") {
                currentSkill = skill
            }
        } else if (language === "Japanese") {
            debugger
            if (skill.url_title === "Hiragana-2") {
                currentSkill = skill
            }
        } else if (language === "German") {
            if (skill.url_title === "Phrases") {
                currentSkill = skill
            }
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
