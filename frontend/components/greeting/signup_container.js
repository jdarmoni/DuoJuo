import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupModal from './signup_modal';

const mapStateToProps = ( state) => {
    debugger
    return {
        errors: state.errors.session,
        formType: 'login',
        currentUser: state.entities.users[state.session.id]
        // navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
