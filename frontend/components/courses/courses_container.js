import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Courses from './courses'
import { signup } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';
import { createLanguage } from '../../actions/language_actions';
import { createLanguageData } from '../../actions/language_data_actions'
import { createSkill } from '../../actions/skill_actions'

const mapStateToProps = (state) => {
    
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        language_data: Object.values(getState().entities.language_data)

    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        updateUser: (user) => dispatch(updateUser(user)),
        createLanguage: (language) => dispatch(createLanguage(language)),
        createLanguageData: (language_data) => dispatch(createLanguageData(language_data)),
        createSkill: (skill) => dispatch(createSkill(skill))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
