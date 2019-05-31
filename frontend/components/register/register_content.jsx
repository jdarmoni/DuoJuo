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

        <div className="body-container">
            
        </div>
    </div>
    </>
    )
}

export default RegisterContent