import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AnonymousDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)

    }
    logout() {
        this.props.logout()
    }
    
    render() {
        return (
            <div>
                
            </div>

        )
    } 
}

export default withRouter(AnonymousDashboard)


