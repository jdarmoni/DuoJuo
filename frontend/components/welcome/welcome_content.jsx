import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../greeting/signup_container';
import { withRouter } from 'react-router-dom';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    loggedIn(){
        if (this.props.currentUser) {
                this.props.history.replace('/')
        }
    }

    render(){
        this.loggedIn()
        return (
            <div className="welcome-margin-div">
                <div>
                    <div className="welcome-header-banner">
                        <div className="welcome-button-container">
                            <button className="create-a-profile-button" id="login-button">create a profile</button>
                        </div>
                        <SignupContainer />
                    </div>
                    <div className="welcome-content-container">
                        <div className="welcome-content-box">
                            <div>
                                <h1 className="welcome-choose-path">Choose your path</h1>
                                <div className="welcome-button-container">
                                    
                                    <button className="welcome-new-button">
                                        <img className="welcome-new-image" src="//d35aaqx5ub95lt.cloudfront.net/images/fork-placement.svg   " />
                                        <h2 className="welcome-new-h2">Already know some Language?</h2>
                                        <div>Take this placement test</div>
                                    </button>

                                    <button className="welcome-new-button">
                                        <img className="welcome-new-image" src="//d35aaqx5ub95lt.cloudfront.net/images/fork-basics.svg"/>
                                        <h2 className="welcome-new-h2">New to Language?</h2>
                                        <div>Start at the basics</div>
                                    </button>

                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Welcome)