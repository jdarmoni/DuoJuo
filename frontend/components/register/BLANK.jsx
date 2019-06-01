import React from 'react';
import LoginModalContainer from '../greeting/login_modal_container';

// CURRENTLY NOT USING


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
                                    <div className="flag-icon-container">
                                        <span className="flag-icon-span spanish-span"></span>
                                    </div>
                                    <div className="flag-icon-language-title">Spanish</div>
                                    <div className="flag-icon-language-stats">22.3M learners</div>
                                </div>
                            </li>
                            <li className="choose-language-item-div">
                                <div>
                                    <div className="flag-icon-container">
                                        <span className="flag-icon-span french-span"></span>
                                    </div>
                                    <div className="flag-icon-language-title">French</div>
                                    <div className="flag-icon-language-stats">12.0M learners</div>
                                </div>
                            </li>
                            <li className="choose-language-item-div">
                                <div>
                                    <div className="flag-icon-container">
                                        <span className="flag-icon-span german-span"></span>
                                    </div>
                                    <div className="flag-icon-language-title">German</div>
                                    <div className="flag-icon-language-stats">7.35M learners</div>
                                </div>
                            </li>
                            <li className="choose-language-item-div">
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

export default RegisterContent