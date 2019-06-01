import React from 'react';
import LoginModalContainer from '../greeting/login_modal_container';

const RegisterContent = () => {
    
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
                            <li className="choose-language-item-div">
                                <div>
                                    <div>
                                        <span></span>
                                    </div>
                                    <div>Spanish</div>
                                    <div>22.3M learners</div>
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

export default RegisterContent