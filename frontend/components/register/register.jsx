import React from 'react';
import { Link } from 'react-router-dom';
import LoginModalContainer from '../greeting/login_modal_container';
import { withRouter } from 'react-router-dom';
// import RegisterContent from './register_content'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }

    navBar(){
        return (
        <header className="logged-out-nav">
            <div className="logged-out-nav-container">
                <a className="duoLogo" href=""></a>

                <div className="langlogin-container">
                    <div className="site-lang">
                        Site language:
                                <span className="site-lang-language">English</span>
                    </div>
                    <div className="login-button-div">
                        <button className="login-button" id="login-button">Login</button>
                    </div>

                    <LoginModalContainer />

                </div>
            </div>
        </header>
        )
    }
    loggedIn() {
        
        if (this.props.currentUser) {
            this.props.history.replace('/')
        }
    }
    register(event){
        let language = event.currentTarget.children[0].children[1].innerText;
        let language_ac; 
        if (language === "French") {
            language_ac = "fr"
        } else if (language === "Spanish") {
            language_ac ="es"
        } else if (language ==="Japanese") {
            language_ac ="jp"
        } else if (language === "German") {
            language_ac ="ge"
        }
        
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        let user = {}
        user['username'] = result;
        user["email"] = result + "@gmail.com";
        user["password"] = "starwars";
        user["learning_language_string"] = language
        user["learning_language"] = language_ac;

        // this.props.signup(user)

    }
    render (){
        debugger
        this.loggedIn()
        return (
            <>
                <div className="logged-out-container">
                    <header className="logged-out-nav">
                        <div className="logged-out-nav-container">
                            <a className="duoLogo" href=""></a>

                            <div className="langlogin-container">
                                <div className="site-lang">
                                    Site language:
                                <span className="site-lang-language">English</span>
                                </div>
                                <div className="login-button-div">
                                    <button className="login-button" id="login-button">Login</button>
                                </div>

                                <LoginModalContainer />

                            </div>
                        </div>
                    </header>

                    <div className="register-outer-container">
                        <div className="register-inner-container">
                            <div className="register-inner-box">
                                <h1 className="register-header">I want to learn...</h1>
                                <div>
                                    <ul className="choose-language-list">
                                        <li className="choose-language-item-div" onClick={this.register}>
                                            <div>
                                                <div className="flag-icon-container">
                                                    <span className="flag-icon-span spanish-span"></span>
                                                </div>
                                                <div className="flag-icon-language-title">Spanish</div>
                                                <div className="flag-icon-language-stats">22.3M learners</div>
                                            </div>
                                        </li>
                                        <li className="choose-language-item-div" onClick={this.register}>
                                            <div>
                                                <div className="flag-icon-container">
                                                    <span className="flag-icon-span french-span"></span>
                                                </div>
                                                <div className="flag-icon-language-title">French</div>
                                                <div className="flag-icon-language-stats">12.0M learners</div>
                                            </div>
                                        </li>
                                        <li className="choose-language-item-div" onClick={this.register}>
                                            <div>
                                                <div className="flag-icon-container">
                                                    <span className="flag-icon-span german-span"></span>
                                                </div>
                                                <div className="flag-icon-language-title">German</div>
                                                <div className="flag-icon-language-stats">7.35M learners</div>
                                            </div>
                                        </li>
                                        <li className="choose-language-item-div" onClick={this.register}>
                                            <div>
                                                <div className="flag-icon-container">
                                                    <span className="flag-icon-span japanese-span"></span>
                                                </div>
                                                <div className="flag-icon-language-title">Japanese</div>
                                                <div className="flag-icon-language-stats">7.73M learners</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Register);
