import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../greeting/signup_container';
import { withRouter } from 'react-router-dom';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.welcomeButton = this.welcomeButton.bind(this)
    }

    loggedIn(){
        if (this.props.currentUser) {
            if(this.props.currentUser.active === true || this.props.currentUser.language_strength) {
                debugger
                let language = this.props.currentUser.learning_language_string
                let skill;
                if (language === "French") {
                    skill = "Basics-1"

                } else if (language==="Spanish"){
                    skill = "Intro"

                } else if (language==="German"){
                    skill = "Basics-1"

                } else if(language==="Japanese"){
                    skill = "Intro-1"
                }
                this.props.history.replace(`/skill/${skill}`)
            }
        }
    }
    welcomeButton(){
        let user = this.props.currentUser
        user['language_strength'] = 1;
        this.props.updateUser(user)
        this.loggedIn()
        // update user again and set level === 1
    }
    render(){
        this.loggedIn()
        
        return (
            <div className="welcome-margin-div">
                <div>
                    <div className="welcome-header-banner">
                        <div className="welcome-button-container">
                            <button className="create-a-profile-button" id="signup-button">create a profile</button>
                        </div>
                        <SignupContainer />
                    </div>
                    <div className="welcome-content-container">
                        <div className="welcome-content-box">
                            <div>
                                <h1 className="welcome-choose-path">Choose your path</h1>
                                <div className="welcome-button-container">
                                    
                                    {/* <button className="welcome-new-button" onClick={this.welcomeButton}>
                                        <img className="welcome-new-image" src="//d35aaqx5ub95lt.cloudfront.net/images/fork-placement.svg   " />
                                        <h2 className="welcome-new-h2">Already know some {this.props.currentUser.learning_language_string}?</h2>
                                        <div>Take this placement test</div>
                                    </button> */}

                                    <button className="welcome-new-button" onClick={this.welcomeButton}>
                                        <img className="welcome-new-image" src="//d35aaqx5ub95lt.cloudfront.net/images/fork-basics.svg"/>
                                        <h2 className="welcome-new-h2">New to {this.props.currentUser.learning_language_string}?</h2>
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