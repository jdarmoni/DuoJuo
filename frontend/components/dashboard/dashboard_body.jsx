import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SignupContainer from '../greeting/signup_container'
import LoginModalContainer from '../greeting/login_modal_container'
import CourseIconContainer from './course_icon_container'

class DashboardBody extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)

    }
    logout() {
        this.props.logout()
    }
    createProfile(){
        
        if (this.props.currentUser.active === false) {

            return (
                
        <div className="dashboard-body-create-profile">
            <h2>Create a profile to save your progress!</h2>
            <button className="dashboard-create-a-profile-button" id="signup-button">create a profile</button>
            <button className="dashboard-login-button" id="login-button">Sign In</button>
            <SignupContainer />
            <LoginModalContainer />
        </div>
            )
        }
    }
    render() {
        
        return (
            <>
                <div className="dashboard-body-wrapper">

                    {/* // right side */}
                    <div className="dashboard-body-right-side">
                        {this.createProfile()}
                        
                    </div>

                    {/* // left side */}
                    <div>
                            <CourseIconContainer/>
                    {/* this is where the course modules will go */}
                    </div>
                </div>
        </>
        )
    } 
}

export default withRouter(DashboardBody)


