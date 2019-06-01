import React from 'react';
import { Link } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import { withRouter } from 'react-router-dom';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (<p>eggs!!!!!</p>)
    }
}
export default withRouter(Welcome)