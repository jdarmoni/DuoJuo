import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Register from './register'
import { signup } from '../../actions/session_actions';
const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
