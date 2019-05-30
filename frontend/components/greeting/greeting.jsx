import React from 'react';
import { Link } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
    }

    splashPage() {
        //LOGGED OUT
        return (
            <>
                <header className="logged-out-nav">
                    <div className="logged-out-nav-container">
                        {/* <img className="logo" src={window.logoURL} /> */}
                        <a className= "duoLogo" href=""></a>
                        
                    </div>
                </header>
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
