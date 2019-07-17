import React from 'react';
import { Link } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import { withRouter } from 'react-router-dom';
import LoginModalContainer from './login_modal_container'
import DashboardContainer from '../dashboard/dashboard_container'
import RegisterContainer from '../register/register_container'
class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
        this.getStarted = this.getStarted.bind(this)
    }
    
    //LOGGED OUT
    splashPage() {
        
        return (
            <>    
            <div className="logged-out-container">
                <header className="logged-out-nav">
                    <div className="logged-out-nav-container">
                        <a className= "duoLogo" href=""></a>

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
                <div className="body-container">
                    <div className="globe"></div>
                    <div className="slogan-text-box">
                        <h1 className="slogan-text">Learn a language for free. Forever.</h1>
                        <a className="get-started-button" onClick={this.getStarted}>get started</a>
                    </div>
                </div>
                <footer className="footer-nav">
                    <div className="flag-carousel">
                            <ul className="flag-carousel-list">
                                <li>
                                    <a href="">
                                        <span className="flag-carousel-list-flag flag-size spanish-flag-footer"></span>
                                        <span className="flag-carousel-list-text">Spanish</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="flag-carousel-list-flag flag-size french-flag-footer"></span>
                                        <span className="flag-carousel-list-text">French</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="flag-carousel-list-flag flag-size german-flag-footer"></span>
                                        <span className="flag-carousel-list-text">German</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="flag-carousel-list-flag flag-size italian-flag-footer"></span>
                                        <span className="flag-carousel-list-text">Italian</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="flag-carousel-list-flag flag-size portuguese-flag-footer"></span>
                                        <span className="flag-carousel-list-text">Portuguese</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="flag-carousel-list-flag flag-size dutch-flag-footer"></span>
                                        <span className="flag-carousel-list-text">Dutch</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="flag-carousel-list-flag flag-size czech-flag-footer"></span>
                                        <span className="flag-carousel-list-text">Czech</span>
                                    </a>
                                </li>

                            </ul>
                    </div>
                </footer>
            </div>
            </>
        )
    }

    logOut() {
        this.props.logout()
        this.props.history.replace('/')
    }
    getStarted() {
        // this.props.history.replace('/register')

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
        user["active"] = false;
        user["site_streak"] = 0;
        this.props.signup(user)
        
        

    }

    //LOGGED IN!
    dashboard() {
            
            return <DashboardContainer />
    };

    render() {
        
        if (this.props.currentUser) {
            if (this.props.currentUser.active === true) {
                
                return this.dashboard()
            } else if (this.props.currentUser.language_strength){
                
                return this.dashboard()
            }
            else {
                
                this.props.history.replace('/register')
                return <RegisterContainer />
            }
        } else {
            
            return this.splashPage()
        }

        // if (this.props.currentUser.language_data) {
        //     
        //     return this.dashboard()
        // } else {
        //     
        //     return this.splashPage()
        // }
    }
};


export default withRouter(Greeting);
