import React from 'react';
import { Link } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
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
                                <button className="login-button">Login</button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="body-container">
                    <div className="globe"></div>
                    <div className="slogan-text-box">
                        <h1 className="slogan-text">Learn a language for free. Forever.</h1>
                        <a className="get-started-button" href="">get started</a>
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

    //LOGGED IN!
    myBooks() {

        return (
            <nav className="logged-in-header-link">
                <div className="header-link-container">
                    <ul>
                        <li><img className="logo" src={window.logoURL} /></li>
                        <li><Link to={`/bookshelf`}>Home</Link></li>
                        <li className="myBooksLink"><Link to={`/bookshelf`}>My Books</Link></li>
                        <li><Link to={`/browse`}>Browse</Link></li>
                        <li>Community</li>
                    </ul>
                    <form className="searchbooks">
                        <input type="text" placeholder="Search books" />
                    </form>

                    <hgroup className="header-group">
                        <button className="header-button" onClick={this.logOut}>Logout</button>
                    </hgroup>
                </div>
            </nav>
        )
    };

    render() {
        return this.props.currentUser ? this.myBooks() : this.splashPage();
    }
};


export default withRouter(Greeting);
