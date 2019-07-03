import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './welcome_content'
import {updateUser} from '../../actions/user_actions'
const mapStateToProps = (state) => {
    
    return {
        currentUser: Object.values(state.entities.users)[0],
        session: Object.values(state.session),
        // currentUser: state.entities.users[state.session.id]
    };
    
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (user)=>dispatch(updateUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
