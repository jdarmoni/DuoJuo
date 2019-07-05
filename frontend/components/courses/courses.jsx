import React from 'react';
import { Link } from 'react-router-dom';
import LoginModalContainer from '../greeting/login_modal_container';
import { withRouter } from 'react-router-dom';
// import RegisterContent from './register_content'

class Courses extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }
    // LanguageData objects are kept track of in their slice of state - so even though the USER state for languageData object is singular, you’ll have the UL from state.entities.languageData[]
    // NEED TO: Add reducers for state.entities.langaugeData

    navBar() {
        return (
            <header className="logged-out-nav">
                <div className="logged-out-nav-container">
                    <a className="duoLogo" href=""></a>

                    <div className="langlogin-container">
                        <div className="site-lang">
                            Site language:
                                <span className="site-lang-language">English</span>
                        </div>

                        {/* <div className="login-button-div">
                            <button className="login-button" id="login-button">Login</button>
                        </div>

                        <LoginModalContainer /> */}

                    </div>
                </div>
            </header>
        )
    }
    register(event) {
        
        let language = event.currentTarget.children[0].children[1].innerText;
        let currentLanguageDatas = this.props.language_data // array of objects
        
        for (let i = 0; i < currentLanguageDatas.length; i++) {
            
            // if you already have the selected lang in your langData objs, abort!
            if (currentLanguageDatas[i].language_string === language) {
                return
            }
        }
       
        // NEXT: create a user object to pass into updateUser at the end
        let language_ac;
        let user = this.props.currentUser
        let newLang = {};

        if (language === "French") {
            language_ac = "fr"
        } else if (language === "Spanish") {
            language_ac = "es"
        } else if (language === "Japanese") {
            language_ac = "jp"
        } else if (language === "German") {
            language_ac = "ge"
        }

        user["learning_language_string"] = language
        user["learning_language"] = language_ac; // <<<*******!!!!!!!!!
        // create a new language object, pass language  down through register container
        newLang['streak'] = 0;
        newLang['language_string'] = language;
        newLang['points'] = 0;
        newLang['learning'] = true;
        newLang['language'] = language_ac;
        newLang['level'] = 0;
        newLang['sentences_translated'] = 0;
        newLang['to_next_level'] = 10;
        newLang['user_id'] = this.props.currentUser.id
        debugger
        this.props.createLanguage(newLang);
        let newLangData = {}
        newLangData = newLang

        // delete newLangData['streak'];
        newLangData['level_percent'] = 0;
        newLangData['max_level'] = false;
        newLangData['language_strength'] = 0;
        newLangData['fluency_score'] = 0;
        newLangData['first_time'] = false;

        this.props.createLanguageData(newLangData).then((payload) => {
            // IF LANGUAGE === FRENCH
            let Basics1;
            let Greetings;
            let Basics2;
            if (language === "French") {

                Basics1 = { "language_string": "French", language_data_id: payload.language_data.id, url_title: "Basics-1", language_mini: "fr", skill_level: 0, num_levels: 4, disabled: false, locked: false }
                Greetings = { "language_string": "French", language_data_id: payload.language_data.id, url_title: "Greetings", language_mini: "fr", skill_level: 0, num_levels: 4, disabled: false, locked: false }
                Basics2 = { "language_string": "French", language_data_id: payload.language_data.id, url_title: "Basics-2", language_mini: "fr", skill_level: 0, num_levels: 4, disabled: false, locked: false }
            } else if (language === "Japanese") {
                Basics1 = { "language_string": "Japanese", language_data_id: payload.language_data.id, url_title: "Basics-1", language_mini: "jp", skill_level: 0, num_levels: 4, disabled: false, locked: false }
                Greetings = { "language_string": "Japanese", language_data_id: payload.language_data.id, url_title: "Greetings", language_mini: "jp", skill_level: 0, num_levels: 4, disabled: false, locked: false }
                Basics2 = { "language_string": "Japanese", language_data_id: payload.language_data.id, url_title: "Basics-2", language_mini: "jp", skill_level: 0, num_levels: 4, disabled: false, locked: false }
            } else if (language === "Spanish") {
                Basics1 = { "language_string": "Spanish", language_data_id: payload.language_data.id, url_title: "Basics-1", language_mini: "es", skill_level: 0, num_levels: 4, disabled: false, locked: false }
                Greetings = { "language_string": "Spanish", language_data_id: payload.language_data.id, url_title: "Greetings", language_mini: "es", skill_level: 0, num_levels: 4, disabled: false, locked: false }
                Basics2 = { "language_string": "Spanish", language_data_id: payload.language_data.id, url_title: "Basics-2", language_mini: "es", skill_level: 0, num_levels: 4, disabled: false, locked: false }
            }

            this.props.createSkill(Basics1)
            this.props.createSkill(Greetings)
            this.props.createSkill(Basics2)

        })

        debugger
        this.props.updateUser(user)
        
    }
    // componentDidUpdate(prevProps) {
    //     debugger
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.language_data.length !== prevProps.language_data.length) {
    //         this.props.history.replace('/');
    //     }
    // }
    render() {

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

export default withRouter(Courses);
