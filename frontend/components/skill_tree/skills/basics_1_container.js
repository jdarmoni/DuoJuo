import { connect } from 'react-redux';
import Basics1 from './basics_1';

const mapStateToProps = (state) => {
    
    let user = state.entities.users[state.session.id]
    let language = user.learning_language_string
    let skills = user.language_data[user.learning_language].skills
    let currentSkill;
    
    if (language ==="French") {
        debugger
        skills.forEach(skill => {
            if (skill.url_title === "Basics-1") {
                currentSkill = skill
            }
        });
    }else if (language==="Spanish") {
        skills.forEach(skill => {
            if (skill.url_title === "Basics-1") {
                currentSkill = skill
            }
        });
    } else if (language === "German") {
        skills.forEach(skill => {
            if (skill.url_title === "Basics-1") {
                currentSkill = skill
            }
        });
    } else if (language==="Japanese") {
        skills.forEach(skill => {
            if (skill.url_title === "Basics-1") {
                currentSkill = skill
            }
        });
    }
    debugger
    // skills.forEach(skill => {
    //     if(skill.url_title === "Basics-1") {
    //         currentSkill = skill
    //     }
    // });
    
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
)(Basics1);
